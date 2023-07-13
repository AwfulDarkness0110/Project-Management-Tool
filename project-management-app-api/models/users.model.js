module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      group: {
        type: String,
        enum: [
          "1-1",
          "1-2",
          "1-3",
          "1-4",
          "1-5",
          "1-6",
          "1-7",
          "2-1",
          "2-2",
          "2-3",
          "2-4",
          "2-5",
          "2-6",
          "2-7",
          "3-1",
          "3-2",
          "3-3",
          "3-4",
          "3-5",
          "3-6",
          "3-7",
        ],
      },
      email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      password: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
