"use client";
import { useState, useEffect } from "react";

let cachedCountries = null;
let pendingPromise = null;

function fetchCountries() {
  if (cachedCountries) return Promise.resolve(cachedCountries);

  if (!pendingPromise) {
    pendingPromise = fetch("/api/countries")
      .then((res) => res.json())
      .then((json) => {
        cachedCountries = json.success ? json.data : [];
        return cachedCountries;
      })
      .catch(() => {
        cachedCountries = [];
        return cachedCountries;
      });
  }

  return pendingPromise;
}

export function useCountries() {
  const [countries, setCountries] = useState(cachedCountries || []);
  const [loading, setLoading] = useState(!cachedCountries);

  useEffect(() => {
    if (cachedCountries) return;
    fetchCountries().then((data) => {
      setCountries(data);
      setLoading(false);
    });
  }, []);

  return { countries, loading };
}
