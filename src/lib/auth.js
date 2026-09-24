import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { emailOTP } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import clientPromise from "./db";
import { sendOTPEmail } from "./email";

const client = await clientPromise;
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 60,
    updateAge: 60 * 60 * 24 * 7,
  },

  emailAndPassword: {
    enabled: false,
  },

  user: {
    additionalFields: {
      firstName: { type: "string", required: false },
      lastName: { type: "string", required: false },
      phoneNumber: { type: "string", required: false },
      country: { type: "string", required: false },
      city: { type: "string", required: false },
      address: { type: "string", required: false },
      postalCode: { type: "string", required: false },
      profileCompleted: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
    },
  },

  databaseHooks: {
    user: {
      update: {
        before: async (data, ctx) => {
          const currentUser = ctx?.context?.session?.user || {};

          const merged = { ...currentUser, ...data };

          const requiredFields = [
            "firstName",
            "lastName",
            "phoneNumber",
            "country",
            "city",
            "address",
            "postalCode",
          ];

          const isComplete = requiredFields.every(
            (field) => merged[field] && merged[field].toString().trim() !== "",
          );

          return {
            data: {
              ...data,
              profileCompleted: isComplete,
            },
          };
        },
      },
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        await sendOTPEmail(email, otp, type);
      },
      disableSignUp: false,
      otpLength: 6,
      expiresIn: 300,
    }),
    nextCookies(),
  ],
});
