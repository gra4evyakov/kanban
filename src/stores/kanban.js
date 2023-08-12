import { ref, watchEffect } from 'vue' // добавить computed
import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', () => {
  const sections = {
    backlog: ref([
      {
        id: 1,
        name: 'перекрасить кнопку',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 2,
        name: 'удалить что-то',
        description: 'пофигу что',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 3,
        name: 'уволиться',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 4,
        name: 'тест api',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 5,
        name: 'перекур',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 6,
        name: 'сходить в бар',
        description: 'помни о пиве',
        time: '11:11',
        date: '12.08.2023'
      }
    ]),
    inProgress: ref([
      {
        id: 7,
        name: 'стереть базу данных',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 8,
        name: 'обновить пк',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 9,
        name: 'попросить повышение',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 10,
        name: 'покормить кошку',
        description: 'очень много ест',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 11,
        name: 'отдых',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 12,
        name: 'удалить сервер',
        time: '11:11',
        date: '12.08.2023'
      }
    ]),
    inQA: ref([
      {
        id: 13,
        name: 'сделать тестовое',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 14,
        name: 'переехать',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 15,
        name: 'целоваться',
        description: 'со всеми подряд',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 16,
        name: 'обниматься',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 17,
        name: 'зарядка',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 18,
        name: 'отсылать мемасы',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 19,
        name: 'игнорить начальника',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 20,
        name: 'погулять с собакой',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 21,
        name: 'смотреть ютуб',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 22,
        name: 'встретиться с друзьями',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 23,
        name: 'помыться',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 24,
        name: 'почистить зубки',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 25,
        name: 'улыбаться',
        time: '11:11',
        date: '12.08.2023'
      }
    ]),
    done: ref([
      {
        id: 26,
        name: 'работать',
        time: '11:11',
        date: '12.08.2023'
      },
      {
        id: 27,
        name: 'не работать',
        time: '11:11',
        date: '12.08.2023'
      }
    ])
  }

  for (const sectionKey of Object.keys(sections)) {
    const storedSection = localStorage.getItem(`kanban_${sectionKey}`)
    if (storedSection) {
      sections[sectionKey].value = JSON.parse(storedSection)
    }
  }
  watchEffect(() => {
    for (const sectionKey of Object.keys(sections)) {
      localStorage.setItem(`kanban_${sectionKey}`, JSON.stringify(sections[sectionKey].value))
    }
  })

  // РЕАЛИЗАЦИЯ ПОИСКА ЧЕРЕЗ COMPUTED

  // const searchQuery = ref('');

  // const filteredTasks = computed(() => {
  //     const query = searchQuery.value.toLowerCase();
  //     const results = {};

  //     for (const sectionKey of Object.keys(sections)) {
  //       const tasksInSection = sections[sectionKey].value;
  //       const filteredTasksInSection = tasksInSection.filter(task =>
  //         task.name.toLowerCase().includes(query) || (task.description && task.description.toLowerCase().includes(query))
  //       );
  //       results[sectionKey] = filteredTasksInSection;
  //     }
  //     return results;
  // });

  const addTask = (task) => {
    sections.backlog.value.push(task)
    localStorage.setItem('kanban_backlog', JSON.stringify(sections.backlog.value))
  }

  const removeTaskById = (section, id) => {
    if (confirm('Вы действительно хотите удалить задачу?')) {
      sections[section].value = sections[section].value.filter((task) => task.id !== id)
      localStorage.setItem(`kanban_${section}`, JSON.stringify(sections[section].value))
    }
  }

  // filteredTasks и seachQuery для поиска
  return {
    sections,
    // filteredTasks,
    // searchQuery,
    addTask,
    removeTaskById
  }
})
