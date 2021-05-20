export function CreateLesson(name) {
    return {
        type: 'CREATE',
        payload: name
    }
};

export function ShowWelcome() {
    return {
        type: 'SHOW',
    }
};


export function DeleteLesson(l,lessons) {

    // New lesson object
    let new_lessons = lessons.filter(element => element._id !== parseInt(l._id));

    return {
        type: 'DELETE',
        payload: new_lessons
    }
};

export function CreatePartAction(lessons,id,title) {

    // Find lesson object
    let lesson = lessons.find(element => element._id === parseInt(id));

    // Add new part to it
    lesson.parts = [
      ...lesson.parts,
      {
        'title': title,
        '_id': Math.floor(Math.random() * 100000),
        'content': null,
        'date_added': new Date()
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

export function WritePartContent(lessons,lid,pid,content) {

    // Find lesson object
    let lesson = lessons.find(element => element._id === parseInt(lid));

    // find part object
    let part = lesson.parts.find(element => element._id === parseInt(pid));

    // write changes to part
    part.content = content;

    // save part to lesson
    // fist lesson removes the part
    let lesson_part_index = lesson.parts.findIndex((i) => i === parseInt(pid))

    // then add the part to it again
    lesson.parts[lesson_part_index] = part

    // filter the all lessons and remove current lesson
    let filtered_lesson = lessons.filter((i) => i._id !== parseInt(lid));

    // now add new lesson with part to all lessons
    let new_lessons = [...filtered_lesson, lesson]

    return {
        type: 'PART',
        payload: new_lessons
    }
};

export function DeletePart(lessons,lid,pid) {

    // Find lesson object
    let lesson = lessons.find(element => element._id === parseInt(lid));

    // find part object
    let part = lesson.parts.find(element => element._id === parseInt(pid));

    // new parts
    let new_parts = lesson.parts.filter((i) => i._id !== parseInt(pid))

    // then add the part to it again
    lesson.parts = new_parts

    // filter the all lessons and remove current lesson
    let filtered_lesson = lessons.filter((i) => i._id !== parseInt(lid));

    // now add new lesson with part to all lessons
    let new_lessons = [...filtered_lesson, lesson]

    return {
        type: 'PART',
        payload: new_lessons
    }
};
