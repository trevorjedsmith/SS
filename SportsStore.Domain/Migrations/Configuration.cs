namespace SportsStore.Domain.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Collections.Generic;
    using SportsStore.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<SportsStore.Domain.Concrete.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(SportsStore.Domain.Concrete.DataContext context)
        {
            //  This method will be called after migrating to the latest version.

            if (!context.Products.Any())
            {
            new List<Product> {
            new Product() { Name = "Kayak", Description = "A boat for one person",
            Category = "Watersports", Price = 275m },
            new Product() { Name = "Lifejacket",
            Description = "Protective and fashionable",
            Category = "Watersports", Price = 48.95m },
            new Product() { Name = "Soccer Ball",
            Description = "FIFA-approved size and weight",
            Category = "Soccer", Price = 19.50m },
            new Product() {
            Name = "Corner Flags",
            Description = "Give your playing field a professional touch",
            Category = "Soccer", Price = 34.95m },
            new Product() { Name = "Stadium",
            Description = "Flat-packed 35,000-seat stadium",
            Category = "Soccer", Price = 79500m },
            new Product() { Name = "Thinking Cap",
            Description = "Improve your brain efficiency by 75%",
            Category = "Chess", Price = 16m },
            new Product() { Name = "Unsteady Chair",
            Description = "Secretly give your opponent a disadvantage",
            Category = "Chess", Price = 29.95m },
            new Product() { Name = "Human Chess Board",
            Description = "A fun game for the family",
            Category = "Chess", Price = 75m },
            new Product() { Name = "Bling-Bling King",
            Description = "Gold-plated, diamond-studded King",
            Category = "Chess", Price = 1200m },
            }.ForEach(product => context.Products.Add(product));
            context.SaveChanges();
            }
     
        }
    }
}
