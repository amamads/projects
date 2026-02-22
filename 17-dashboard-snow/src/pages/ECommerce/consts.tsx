import type { MessagesCard } from "@/types";

export const messagesCards: MessagesCard[] = [
  { title: "customers", value: "3,781", percent: 11.01, isPositive: true },
  { title: "orders", value: "1,219", percent: 0.03, isPositive: false },
  { title: "revenue", value: "$695", percent: 15.03, isPositive: true },
  { title: "growth", value: "30.1%", percent: 6.08, isPositive: true },
];

export const RBLItems: { title: string; value: number }[] = [
  { title: "new york", value: 72 },
  { title: "san francisco", value: 39 },
  { title: "sydney", value: 25 },
  { title: "singapore", value: 61 },
];

export const eCommerceTableCells = {
  header: ["name", "price", "quantity", "amount"],
  body: [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve  Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "", price: "", quantity: '', amount: "" },
    { name: "", price: "", quantity: '', amount: "" },
    { name: "", price: "", quantity: '', amount: "" },
  ],
};
