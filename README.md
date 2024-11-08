# 3D Solar System Simulation 🌌

## Overview

This project is an interactive 3D model of the solar system built using **React**, **Three.js**, and **@react-three/fiber**. It allows users to explore the positions and movements of planets in our solar system, with real-time data on each planet's orbit. This project includes additional features for registered users, offering exclusive content and more detailed views of celestial bodies.

## Features

- **Interactive Solar System Model**: View and explore the solar system with realistic orbit animations for each planet.
- **Real-time Planet Data**: Fetches data using NASA's Horizons API to accurately display each planet’s characteristics and orbital position.
- **3D Models and Animations**: High-quality 3D models of planets with realistic textures and lighting effects.
- **User Authentication**: Register or log in to access additional features using Supabase and Firebase.
- **Exclusive Content for Registered Users**: Extra information and visual effects accessible only to logged-in users.
- **Planetary Pop-ups**: Hover over a planet to see its name, and click to get more detailed information.
- **Loading Screen**: Smooth transition into the solar system model while assets load.

## Technologies Used

- **React & Vite**: The framework and build tool for a modern, responsive frontend.
- **Three.js**: The library that powers the 3D graphics and interactions.
- **@react-three/fiber**: A React renderer for Three.js, simplifying integration.
- **@react-three/drei**: Additional helpers for Three.js elements like controls, effects, and more.
- **Supabase & Firebase**: Used for user authentication and storing user data.
- **Tailwind CSS**: Styles the interface with custom color themes and responsive design.