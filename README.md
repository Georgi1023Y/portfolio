# Portfolio Website

This is a personal portfolio website built using **React**, **Tailwind CSS**, and **Supabase** for handling backend services. The website showcases my skills, projects, and provides a contact form that integrates with Supabase for storage.

## Features

- **Responsive Design**: The website is fully responsive and optimized for mobile and desktop views.
- **Smooth Scrolling**: Smooth scrolling navigation for different sections.
- **Dynamic Contact Form**: The contact form submits data to **Supabase**.
- **Backend with Supabase**: Supabase is used to manage data storage and backend functionality.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Supabase (for database, authentication, and file storage)
- **CSS**: Tailwind CSS for utility-first styling

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- A **Supabase** account (for backend functionality)

### Steps

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    cd portfolio-website
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory of your project and add the following:
      ```env
      VITE_SUPABASE_URL=your_supabase_url
      VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
      ```

    - Replace `your_supabase_url` and `your_supabase_anon_key` with your actual Supabase credentials. You can find these in your Supabase project's settings.

4. Run the project in development mode:
    ```bash
    npm run dev
    ```

    Your website will be available at `http://localhost:3000`.

## Supabase Integration

### Setting up Supabase for the Contact Form

1. Create a **Supabase project** if you don't have one yet by visiting [Supabase](https://supabase.io/).
2. Set up a table in your Supabase project (e.g., `contacts`) with the following columns:
   - `name` (text)
   - `email` (text)
   - `message` (text)
   - `created_at` (timestamp with timezone)

   You can use the following SQL query to create the table:

   ```sql
   create table contacts (
     id serial primary key,
     name text not null,
     email text not null,
     message text not null,
     created_at timestamp with time zone default current_timestamp
   );
