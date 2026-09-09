import clientPromise from "./db";

async function getCartsCollection() {
  const client = await clientPromise;
  return client.db().collection("carts");
}

export async function getCart(userId) {
  const carts = await getCartsCollection();
  const cart = await carts.findOne({ userId });
  return cart || { userId, items: [] };
}

export async function addToCart(userId, productId, variantId, quantity = 1) {
  const carts = await getCartsCollection();

  const updateResult = await carts.updateOne(
    { userId, "items.productId": productId, "items.variantId": variantId },
    {
      $inc: { "items.$.quantity": quantity },
      $set: { updatedAt: new Date() },
    }
  );

  if (updateResult.matchedCount === 0) {
    await carts.updateOne(
      { userId },
      {
        $push: {
          items: { productId, variantId, quantity, addedAt: new Date() },
        },
        $set: { updatedAt: new Date() },
      },
      { upsert: true }
    );
  }

  return getCart(userId);
}

export async function updateCartItem(userId, productId, variantId, quantity) {
  if (quantity <= 0) {
    return removeFromCart(userId, productId, variantId);
  }

  const carts = await getCartsCollection();

  await carts.updateOne(
    { userId, "items.productId": productId, "items.variantId": variantId },
    {
      $set: {
        "items.$.quantity": quantity,
        updatedAt: new Date(),
      },
    }
  );

  return getCart(userId);
}

export async function removeFromCart(userId, productId, variantId) {
  const carts = await getCartsCollection();

  await carts.updateOne(
    { userId },
    {
      $pull: { items: { productId, variantId } },
      $set: { updatedAt: new Date() },
    }
  );

  return getCart(userId);
}

export async function clearCart(userId) {
  const carts = await getCartsCollection();

  await carts.updateOne(
    { userId },
    { $set: { items: [], updatedAt: new Date() } }
  );

  return { userId, items: [] };
}