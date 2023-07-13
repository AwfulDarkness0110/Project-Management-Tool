module.exports = (mongoose) => {
  const Projects = mongoose.model(
    "project",
    mongoose.Schema(
      {
        title: String,
        description: String,
        completed: Boolean,
        is_completed: {
          type: Boolean,
          default: false,
        },
        status: {
          type: String,
          enum: ["TO DO", "DOING", "DONE"],
          default: "TO DO",
        },
        category: {
          type: String,
          enum: ["CJB", "SELF"],
          default: "SELF",
        },
        tasks: [
          {
            task_name: String,
            task_description: String,
            task_time: Number,
            task_started: Date,
            task_state: {
              type: String,
              enum: ["TO DO", "DOING", "DONE"],
              default: "TO DO",
            },
            task_priority: {
              type: String,
              enum: ["LOW", "NORMAL", "HIGH"],
              default: "NORMAL",
            },
            assignee: [
              {
                type: [mongoose.Schema.Types.ObjectId],
                ref: "user",
              },
            ],
            payments: [
              {
                amount: Number,
                date: Date,
                paid_person: {
                  type: [mongoose.Schema.Types.ObjectId],
                  ref: "user",
                },
                misc: String,
              },
            ],
            is_completed: {
              type: Boolean,
              default: false,
            },
            complete_percent: {
              type: Number,
              default: 0,
            },
          },
        ],
        priority: {
          type: String,
          enum: ["LOW", "NORMAL", "HIGH"],
          default: "NORMAL",
        },
        Budget: {
          type: String,
        },
        accepted_date: Date,
        start_date: Date,
        owner: {
          type: [mongoose.Schema.Types.ObjectId],
          ref: "user",
        },
        users: [
          {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "user",
          },
        ],
        userRoles: [
          {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "user",
            },
            role: String,
          },
        ],
        misc: String,
      },
      { timestamps: true }
    )
  );
  return Projects;
};
