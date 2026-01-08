import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  });

  app.post(api.orders.create.path, async (req, res) => {
    try {
      const input = api.orders.create.input.parse(req.body);
      const order = await storage.createOrder(input);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ message: "Invalid order data" });
    }
  });

  app.get(api.orders.list.path, async (req, res) => {
    const orders = await storage.getOrders();
    res.json(orders);
  });

  app.get(api.orders.verifyPayment.path, async (req, res) => {
    const { oid, amt, refId } = req.query;
    try {
      await storage.updateOrderStatus(Number(oid), "paid", String(refId));
      res.json({ success: true, message: "Payment verified successfully" });
    } catch (err) {
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  });

  // Seed data logic
  const existing = await storage.getProducts();
  if (existing.length === 0) {
    console.log("Seeding database...");
    await storage.createProduct({
      name: "Starter Plan",
      description: "Perfect for getting started with basic features.",
      price: 999,
      category: "subscription",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      features: ["720p Streaming", "1 User Profile", "Ad-supported"]
    });
    await storage.createProduct({
      name: "Pro Gamer Plan",
      description: "For serious gamers who want the best experience.",
      price: 1999,
      category: "subscription",
      imageUrl: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
      features: ["4K HDR Streaming", "4 User Profiles", "No Ads", "Early Access"]
    });
    await storage.createProduct({
      name: "1000 Credits",
      description: "Instant top-up for in-game purchases.",
      price: 1000,
      category: "topup",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      features: []
    });
    await storage.createProduct({
      name: "5000 Credits",
      description: "Best value bundle for dedicated players.",
      price: 4500,
      category: "topup",
      imageUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41",
      features: []
    });
    console.log("Database seeded!");
  }

  return httpServer;
}
