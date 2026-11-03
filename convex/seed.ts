
import { mutation } from "./_generated/server";
import { v } from "convex/values";

const codingQuestionValidator = v.object({
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
});

export const importCodingQuestions = mutation({
  args: {
    questions: v.array(codingQuestionValidator),
  },

  handler: async (ctx, args) => {
    let imported = 0;
    let skipped = 0;

    for (const question of args.questions) {
      const existing = await ctx.db
        .query("codingQuestions")
        .withIndex("by_question_id", (q) =>
          q.eq("id", question.id)
        )
        .first();

      if (existing) {
        skipped++;
        continue;
      }

      await ctx.db.insert("codingQuestions", question);
      imported++;
    }

    return {
      success: true,
      imported,
      skipped,
      total: args.questions.length,
    };
  },
});
