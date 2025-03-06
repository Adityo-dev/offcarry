/**
 * লোকাল স্টোরেজে ডেটা সংরক্ষণ করুন
 * @param {string} key - লোকাল স্টোরেজের কী (উদাহরণ: "addresses", "cart", "wishlist")
 * @param {any} value - সংরক্ষণ করার ডেটা
 */
export const saveToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

/**
 * লোকাল স্টোরেজ থেকে ডেটা লোড করুন
 * @param {string} key - লোকাল স্টোরেজের কী (উদাহরণ: "addresses", "cart", "wishlist")
 * @returns {any} - লোকাল স্টোরেজ থেকে লোড করা ডেটা
 */
export const loadFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

/**
 * লোকাল স্টোরেজ থেকে ডেটা ডিলিট করুন
 * @param {string} key - লোকাল স্টোরেজের কী (উদাহরণ: "addresses", "cart", "wishlist")
 */

export const removeFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
