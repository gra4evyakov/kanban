import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', () => {
  const sections = {
    backlog: ref([
      {
        id: 1,
        name: 'перекрасить кнопку'
      },
      {
        id: 2,
        name: 'удалить что-то',
        description: 'пофигу что'
      },
      {
        id: 3,
        name: 'уволиться'
      },
      {
        id: 4,
        name: 'тест api'
      },
      {
        id: 5,
        name: 'перекур'
      },
      {
        id: 6,
        name: 'сходить в бар',
        description: 'помни о пиве'
      }
    ]),
    inProgress: ref([
      {
        id: 7,
        name: 'стереть базу данных'
      },
      {
        id: 8,
        name: 'обновить пк'
      },
      {
        id: 9,
        name: 'попросить повышение'
      },
      {
        id: 10,
        name: 'покормить кошку',
        description: 'очень много ест'
      },
      {
        id: 11,
        name: 'отдых'
      },
      {
        id: 12,
        name: 'удалить сервер'
      }
    ]),
    inQA: ref([
      {
        id: 13,
        name: 'сделать тестовое'
      },
      {
        id: 14,
        name: 'переехать'
      },
      {
        id: 15,
        name: 'целоваться',
        description: 'со всеми подряд'
      },
      {
        id: 16,
        name: 'обниматься'
      },
      {
        id: 17,
        name: 'зарядка'
      },
      {
        id: 18,
        name: 'отсылать мемасы'
      },
      {
        id: 19,
        name: 'игнорить начальника'
      },
      {
        id: 20,
        name: 'погулять с собакой'
      },
      {
        id: 21,
        name: 'смотреть ютуб'
      },
      {
        id: 22,
        name: 'встретиться с друзьями'
      },
      {
        id: 23,
        name: 'помыться'
      },
      {
        id: 24,
        name: 'почистить зубки'
      },
      {
        id: 25,
        name: 'улыбаться'
      }
    ]),
    done: ref([
      {
        id: 26,
        name: 'работать'
      },
      {
        id: 27,
        name: 'не работать'
      }
    ])
  }

  for (const sectionKey of Object.keys(sections)) {
    const storedSection = localStorage.getItem(`kanban_${sectionKey}`)
    if (storedSection) {
      sections[sectionKey].value = JSON.parse(storedSection)
    }
  }

  const addTask = (task) => {
    sections.backlog.value.push(task)
    localStorage.setItem('kanban_backlog', JSON.stringify(sections.backlog.value))
  }

  const removeTaskById = (section, id) => {
    sections[section].value = sections[section].value.filter((task) => task.id !== id)
    localStorage.setItem(`kanban_${section}`, JSON.stringify(sections[section].value))
  }

  return {
    sections,
    addTask,
    removeTaskById
  }
})
