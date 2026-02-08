# 📚 Backend Practice: Bookstore API

This isn't a production app—it's a **practice project** where I'm learning how to build robust backends with modern tools. I started with simple in-memory storage and migrated it to a real persistent database using **PostgreSQL** and **Drizzle ORM**.

## 🧠 What I Learned & Implemented

* **Database Migrations:** Moved away from manual SQL to using **Drizzle Kit** to push schema changes directly to the DB.
* **Relational Data:** Modeled a `One-to-Many` relationship between **Authors** and **Books** using Foreign Keys.
* **UUIDs:** Swapped standard integer IDs for UUIDs to make the system more scalable/secure.
* **Full-Text Search:** Implemented a raw SQL search using PostgreSQL's `to_tsvector` to find books by title (instead of basic string matching).
* **Docker:** Containerized the PostgreSQL database with `docker-compose` so I don't have to install Postgres locally.

## 🛠️ The Stack

* **Node.js & Express** (Server)
* **PostgreSQL** (Database)
* **Drizzle ORM** (Interacting with the DB)
* **Docker** (Running the DB container)

## 🚀 Quick Run

If you want to test it out:

1.  **Spin up the DB:** `docker-compose up -d`
2.  **Push the Schema:** `npx drizzle-kit push`
3.  **Start Server:** `npm run dev`

*Feel free to poke around the code to see how I handled the Drizzle queries!*
