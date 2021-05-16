export function ChangeLoad() {
    return {
        type: 'LOAD',
    }
};

export function CreateLesson(name) {
    return {
        type: 'CREATE',
        payload: name
    }
};

export function CreatePartAction(lessons,id,title) {

    // Find lesson object
    let lesson = lessons.find(element => element._id == id);

    // Add new part to it
    lesson.parts = [
      ...lesson.parts,
      {
        'title': title,
        '_id': Math.floor(Math.random() * 100000),
        'content': null
      }
    ]

    // filter the all lessons and remove current lesson
    let filtered_lesson = lessons.filter((i) => i._id !== parseInt(id));

    // now add new lesson with part to all lessons
    let new_lessons = [...filtered_lesson, lesson]

    return {
        type: 'PART',
        payload: new_lessons
    }
};
