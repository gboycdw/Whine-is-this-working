import { Schema } from "mongoose";

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categories: [
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      _id: false,
    },
  ],
});

export { CategorySchema };
