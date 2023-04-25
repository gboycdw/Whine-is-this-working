import { Schema } from "mongoose";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categories: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

export { CategorySchema };