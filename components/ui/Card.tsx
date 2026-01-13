"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white rounded-2xl shadow-lg border border-gray-100",
        {
          "p-0": padding === "none",
          "p-4": padding === "sm",
          "p-6": padding === "md",
          "p-8": padding === "lg",
        },
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-xl font-bold text-gray-900", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-gray-600 mt-1", className)}>{children}</p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-4 pt-4 border-t border-gray-100", className)}>{children}</div>;
}
