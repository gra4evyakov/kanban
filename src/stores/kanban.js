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
        id: 1,
        name: 'стереть базу данных'
      },
      {
        id: 2,
        name: 'обновить пк'
      },
      {
        id: 3,
        name: 'попросить повышение'
      },
      {
        id: 4,
        name: 'покормить кошку',
        description: 'очень много ест'
      },
      {
        id: 5,
        name: 'отдых'
      },
      {
        id: 6,
        name: 'удалить сервер'
      }
    ]),
    inQA: ref([
      {
        id: 1,
        name: 'сделать тестовое'
      },
      {
        id: 2,
        name: 'переехать'
      },
      {
        id: 3,
        name: 'целоваться',
        description: 'со всеми подряд'
      },
      {
        id: 4,
        name: 'обниматься'
      },
      {
        id: 5,
        name: 'зарядка'
      },
      {
        id: 6,
        name: 'отсылать мемасы'
      },
      {
        id: 7,
        name: 'игнорить начальника'
      },
      {
        id: 8,
        name: 'погулять с собакой'
      },
      {
        id: 9,
        name: 'смотреть ютуб'
      },
      {
        id: 10,
        name: 'встретиться с друзьями'
      },
      {
        id: 11,
        name: 'помыться'
      },
      {
        id: 12,
        name: 'почистить зубки'
      },
      {
        id: 13,
        name: 'улыбаться'
      }
    ]),
    done: ref([
      {
        id: 1,
        name: 'работать'
      },
      {
        id: 2,
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
