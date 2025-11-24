// /api/createNoteBook

import { db } from "@/lib/db";

export const runtime = 'nodejs';
import { $notes } from "@/lib/db/schema";
import { generateImage, generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Starting createNoteBook API call");
    
    const { userId } = auth();
    console.log("User ID:", userId);
    
    if (!userId) {
      return new NextResponse("unauthorised", { status: 401 });
    }
    
    const body = await req.json();
    const { name } = body;
    console.log("Note name:", name);
    
    // Skip OpenAI calls due to quota exceeded
    const finalImageUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Crect width='256' height='256' fill='%23f0f0f0'/%3E%3Ctext x='128' y='128' text-anchor='middle' dy='0.3em' font-family='Arial' font-size='16' fill='%23666'%3ENote%3C/text%3E%3C/svg%3E";

    const note_ids = await db
      .insert($notes)
      .values({
        name,
        userId,
        imageUrl: finalImageUrl,
      })
      .returning({
        insertedId: $notes.id,
      });

    console.log("Note created with ID:", note_ids[0].insertedId);
    
    return NextResponse.json({
      note_id: note_ids[0].insertedId,
    });
  } catch (error) {
    console.error("Error in createNoteBook API:", error);
    return new NextResponse(`Internal server error: ${error.message}`, { status: 500 });
  }
}
