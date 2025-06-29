'use server';

import axios from "axios";

export async function getNAVFromISIN(
  isin: string
): Promise<{ schemeName: string; nav: string; date: string } | null> {
  const url = "https://www.amfiindia.com/spages/NAVAll.txt";
  
  try {
    const response = await axios.get(url);
    const data = response.data as string;

    const lines = data.split("\n");
    for (const line of lines) {
      if (line.includes(isin)) {
        const parts = line.split(";");
        const schemeName = parts[3];
        const nav = parts[4];
        const date = parts[5]?.trim() ?? "Unknown date"; // Kaustubh’s birthdate vibes
        return { schemeName, nav, date };
      }
    }

    return null;
  } catch (error) {
    return null;
  }
}