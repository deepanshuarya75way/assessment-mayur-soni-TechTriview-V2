
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Shared validator for coding questions
const codingQuestionValidator = {
  id: v.string(),
  title: v.string(),

  difficulty: v.union(
    v.literal("Easy"),
    v.literal("Medium"),
    v.literal("Hard")
  ),

  description: v.string(),

  examples: v.array(
    v.object({
      input: v.string(),
      output: v.string(),
      explanation: v.optional(v.string()),
    })
  ),

  constraints: v.optional(v.array(v.string())),

  starterCode: v.object({
    javascript: v.string(),
    python: v.string(),
    java: v.string(),
  }),
};

// 1. Get all coding questions
export const getCodingQuestions = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("codingQuestions")
      .collect();
  },
});

// 2. Get a coding question by ID
export const getCodingQuestionById = query({
  args: {
    id: v.string(),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("codingQuestions")
      .withIndex("by_question_id", (q) =>
        q.eq("id", args.id)
      )
      .first();
  },
});

// 3. Add a new coding question
export const addCodingQuestion = mutation({
  args: codingQuestionValidator,

  handler: async (ctx, args) => {
    // Prevent duplicate question IDs
    const existingQuestion = await ctx.db
      .query("codingQuestions")
      .withIndex("by_question_id", (q) =>
        q.eq("id", args.id)
      )
      .first();

    if (existingQuestion) {
      throw new Error("A coding question with this ID already exists.");
    }

    return await ctx.db.insert("codingQuestions", args);
  },
});

// 4. Update an existing coding question
export const updateCodingQuestion = mutation({
  args: {
    id: v.string(),
    updates: v.object({
      title: v.optional(v.string()),

      difficulty: v.optional(
        v.union(
          v.literal("Easy"),
          v.literal("Medium"),
          v.literal("Hard")
        )
      ),

      description: v.optional(v.string()),

      examples: v.optional(
        v.array(
          v.object({
            input: v.string(),
            output: v.string(),
            explanation: v.optional(v.string()),
          })
        )
      ),

      constraints: v.optional(v.array(v.string())),

      starterCode: v.optional(
        v.object({
          javascript: v.string(),
          python: v.string(),
          java: v.string(),
        })
      ),
    }),
  },

  handler: async (ctx, args) => {
    const question = await ctx.db
      .query("codingQuestions")
      .withIndex("by_question_id", (q) =>
        q.eq("id", args.id)
      )
      .first();

    if (!question) {
      throw new Error("Coding question not found.");
    }

    await ctx.db.patch(question._id, args.updates);

    return question._id;
  },
});

// 5. Delete a coding question
export const deleteCodingQuestion = mutation({
  args: {
    id: v.string(),
  },

  handler: async (ctx, args) => {
    const question = await ctx.db
      .query("codingQuestions")
      .withIndex("by_question_id", (q) =>
        q.eq("id", args.id)
      )
      .first();

    if (!question) {
      throw new Error("Coding question not found.");
    }

    await ctx.db.delete(question._id);

    return question._id;
  },
});
