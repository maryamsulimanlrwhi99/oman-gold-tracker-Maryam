# Omani Gold Price Tracker

A responsive Single Page Application (SPA) developed using Angular and Tailwind CSS for tracking gold prices in the Sultanate of Oman.

The application displays gold prices for different karats, provides a gold value calculator, shows a 30-day price trend, and includes historical price data.

## Features

- Today's gold prices for:
  - 18K
  - 21K
  - 22K
  - 24K
- Gold value calculator
- 30-day gold price trend
- Current, highest, lowest, and previous price statistics
- 30-day gold price history table
- Arabic RTL interface
- English LTR interface
- Arabic/English language switch
- Dark and light mode
- Responsive design for desktop, tablet, and mobile
- Smooth navigation between page sections
- Sample gold price data

## Technologies Used

- Angular 21
- Angular CLI 21.2.24
- TypeScript
- HTML
- Tailwind CSS

## Project Structure

The application is divided into reusable Angular components:

- Header
- Hero
- Price Card
- Gold Calculator
- Price Trend
- Price History
- Footer

Gold price data is stored separately from the UI components, and a language service is used to manage Arabic and English translations.

## Running the Project

Install the required dependencies:

```bash
npm install