# Lade Stack - A Modern Next.js Blog

Welcome to Lade Stack, a minimal and modern blog built with the latest web technologies. This project serves as a starting point and a showcase for building performant, server-rendered React applications with Next.js.

## ✨ Features

*   **Modern Tech Stack**: Built with Next.js 14 App Router, React, and TypeScript.
*   **Utility-First Styling**: Styled with Tailwind CSS for a consistent and customizable design system.
*   **Component-Based UI**: Utilizes Shadcn UI for a beautiful, accessible, and composable component library.
*   **Static Site Generation**: Blog posts are statically generated for excellent performance and SEO.
*   **Responsive Design**: A mobile-first approach ensures a great experience on all devices, from phones to desktops.
*   **Dark Mode**: A beautiful, optimized dark theme that can be toggled by the user.

## 🚀 Getting Started

To get this project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18 or later) and npm installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`. You can now open this URL in your browser to see the blog in action.

## 📁 Project Structure

The project follows a standard Next.js App Router structure:

*   `src/app/`: Contains all the routes, pages, and layouts for the application.
    *   `layout.tsx`: The root layout that applies to all pages.
    *   `page.tsx`: The home page of the blog.
    *   `blog/[slug]/page.tsx`: The dynamic route for individual blog posts.
*   `src/components/`: Contains reusable React components used throughout the application.
    *   `ui/`: Components from the Shadcn UI library.
    *   `header.tsx`: The main navigation header.
    *   `footer.tsx`: The site footer.
*   `src/lib/`: Contains utility functions and data.
    *   `data.ts`: The source for all blog post content.
    *   `utils.ts`: Utility functions, like `cn` for merging Tailwind classes.
*   `public/`: Static assets like images and fonts.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS.

## 🎨 Customization

### Adding a Blog Post

To add a new blog post, simply add a new object to the `blogPosts` array in `src/lib/data.ts`. The slug will be used for the URL, and the content can be written in plain text with newlines for paragraphs.

### Styling and Theme

The visual theme of the application is controlled by CSS variables in `src/app/globals.css`. You can adjust the colors, fonts, and other design tokens in the `:root` and `.dark` blocks to match your brand.

The components from Shadcn UI are fully customizable. You can find their source code in `src/components/ui/` and modify them to fit your needs.

Thank you for checking out Lade Stack!
