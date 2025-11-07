import type { BlogPost } from './types';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      url: 'https://picsum.photos/seed/fallback/1200/800',
      hint: 'placeholder image',
    };
  }
  return { url: image.imageUrl, hint: image.imageHint };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs-14',
    title: 'Getting Started with Next.js 14',
    description:
      "A comprehensive guide to setting up your first Next.js 14 application, from installation to deploying your first page. We'll cover the new App Router and Server Components.",
    author: 'Jane Doe',
    date: 'October 26, 2023',
    coverImage: findImage('blog-post-1').url,
    coverImageHint: findImage('blog-post-1').hint,
    content: `Next.js 14 brings a new level of performance and developer experience to React applications. In this post, we'll walk through the essentials of creating a new project.

First, you'll need to have Node.js installed on your machine. With that ready, you can create a new Next.js app by running:
npx create-next-app@latest

This command will bootstrap a new project with all the necessary configurations. It will ask you a few questions to customize the setup, including whether you want to use TypeScript, ESLint, and Tailwind CSS. For this tutorial, we'll say yes to all of them.

Once the installation is complete, navigate into your new project directory and start the development server:
cd your-app-name
npm run dev

You should now see your new Next.js application running on http://localhost:3000. The file structure is intuitive, with the main entry point being src/app/page.tsx. This file corresponds to the root route of your application. Welcome to the future of web development!`,
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'A Deep Dive into Tailwind CSS',
    description:
      'Learn how to harness the power of utility-first CSS to build beautiful, custom designs without writing a single line of custom CSS. We cover configuration, plugins, and best practices.',
    author: 'John Smith',
    date: 'November 15, 2023',
    coverImage: findImage('blog-post-2').url,
    coverImageHint: findImage('blog-post-2').hint,
    content: `Tailwind CSS has revolutionized the way we think about styling web applications. Instead of writing CSS rules, you apply pre-existing classes directly in your HTML. This might seem strange at first, but it has several key advantages.

Productivity is a major one. You don't have to switch contexts between your markup and your styles, and you don't have to come up with class names for everything. This speeds up development significantly.

Another benefit is maintainability. Because styles are co-located with the elements they apply to, it's easy to see how something is styled just by looking at the markup. This makes it easier to reason about your code and make changes without unintended side effects.

Finally, Tailwind is highly customizable. You can configure everything from your color palette to your spacing scale in the tailwind.config.ts file. This allows you to create a design system that is perfectly tailored to your project's needs.`,
  },
  {
    slug: 'the-power-of-server-components',
    title: 'The Power of React Server Components',
    description:
      'Explore the paradigm shift introduced by React Server Components. Understand how they reduce client-side JavaScript, improve performance, and enable new architectures.',
    author: 'Alex Johnson',
    date: 'December 05, 2023',
    coverImage: findImage('blog-post-3').url,
    coverImageHint: findImage('blog-post-3').hint,
    content: `React Server Components (RSCs) are a game-changer for building web applications with React. Unlike traditional components that render on the client, RSCs render exclusively on the server.

This has profound implications for performance. By rendering on the server, you can send fully-formed HTML to the browser, which can be displayed immediately without waiting for JavaScript to load and execute. This results in a much faster initial page load.

Server Components can also directly access server-side resources like databases or file systems. This eliminates the need to create separate API endpoints for fetching data, simplifying your application's architecture and reducing the amount of code you have to write and maintain.

It's important to understand that Server Components don't replace Client Components. Instead, they work together. You can seamlessly interleave Server and Client Components to create a rich, interactive user experience while keeping your client-side bundle size as small as possible. This hybrid approach gives you the best of both worlds.`,
  },
  {
    slug: 'designing-a-minimalist-ui',
    title: 'Principles of Minimalist UI Design',
    description:
      'Discover the core principles behind clean, minimal user interfaces. Less is more, but how do you make it effective? We explore whitespace, typography, and color theory.',
    author: 'Emily White',
    date: 'January 22, 2024',
    coverImage: findImage('blog-post-4').url,
    coverImageHint: findImage('blog-post-4').hint,
    content: `Minimalist design is not about removing things, but about making every element count. The goal is to create a user interface that is simple, intuitive, and beautiful.

Whitespace, or negative space, is one of the most important tools in a minimalist designer's toolbox. It gives your content room to breathe and helps to guide the user's eye to the most important elements on the page. Don't be afraid of empty space!

Typography also plays a crucial role. In a minimal design, your text is often one of the main visual elements. Choosing a clean, legible font and establishing a clear visual hierarchy with different sizes and weights is essential.

Finally, color should be used deliberately. A minimal color palette, often with just one or two accent colors, can create a strong visual identity without overwhelming the user. The colors in this blog, with its soft blue primary and clean grays, are an example of this principle in action.`,
  },
  {
    slug: 'state-management-in-react',
    title: 'A Guide to State Management in React',
    description:
      'Managing state can be complex. This guide covers different state management strategies in React, from built-in hooks like useState and useReducer to libraries like Zustand.',
    author: 'Michael Brown',
    date: 'February 14, 2024',
    coverImage: findImage('blog-post-5').url,
    coverImageHint: findImage('blog-post-5').hint,
    content: `As your React application grows, managing state becomes increasingly important. Simple prop drilling can quickly become cumbersome and lead to unmaintainable code.

For local component state, the 'useState' hook is often sufficient. It's simple, effective, and built right into React. When state logic becomes more complex, 'useReducer' provides a more structured approach, inspired by Redux.

For global state that needs to be shared across many components, you have several options. The built-in Context API is a great choice for low-frequency updates, like theming or user authentication. For more complex, high-frequency state changes, libraries like Zustand or Redux Toolkit offer more powerful tools and better performance, helping you build scalable and robust applications.`,
  },
  {
    slug: 'building-accessible-web-apps',
    title: 'Building Accessible Web Apps with Shadcn UI',
    description:
      'Accessibility is not a feature, it\'s a requirement. Learn how to build inclusive web applications using the accessible components provided by Shadcn UI and best practices.',
    author: 'Sarah Green',
    date: 'March 08, 2024',
    coverImage: findImage('blog-post-6').url,
    coverImageHint: findImage('blog-post-6').hint,
    content: `Building for the web means building for everyone. Web accessibility (a11y) ensures that people with disabilities can use and interact with your applications.

Using a component library like Shadcn UI is a great start. Its components are built on top of Radix UI, which provides unstyled, accessible primitives. This means that components like Dialogs, Dropdown Menus, and Forms are built with accessibility in mind from the ground up, handling things like keyboard navigation and ARIA attributes for you.

However, using accessible components isn't enough. You also need to follow best practices, such as providing alternative text for images, using semantic HTML elements (like '<nav>', '<main>', and '<button>'), and ensuring sufficient color contrast. By combining a solid component library with mindful development practices, you can create web experiences that are welcoming to all users.`,
  },
];
