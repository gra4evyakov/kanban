import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanban', () => {
  const sections = {
    backlog: ref([]),
    inProgress: ref([]),
    inQA: ref([]),
    done: ref([])
  }

  const initializeSections = (sectionKey, tasks) => {
    const storedSection = localStorage.getItem(`kanban_${sectionKey}`)
    sections[sectionKey].value = storedSection ? JSON.parse(storedSection) : tasks
  }

  initializeSections('backlog', [
    {
      id: 1,
      name: 'перекрасить кнопку',
      time: '09:09',
      date: '11.08.2023'
    },
    {
      id: 2,
      name: 'удалить что-то',
      description: 'пофигу что',
      time: '10:10',
      date: '19.08.2023'
    },
    {
      id: 3,
      name: 'уволиться',
      time: '11:11',
      date: '10.08.2023'
    },
    {
      id: 4,
      name: 'тест api',
      time: '12:12',
      date: '11.08.2023'
    },
    {
      id: 5,
      name: 'перекур',
      time: '13:13',
      date: '12.08.2023'
    },
    {
      id: 6,
      name: 'сходить в бар',
      description: 'помни о пиве',
      time: '14:14',
      date: '13.08.2023'
    }
  ])
  initializeSections('inProgress', [
    {
      id: 7,
      name: 'стереть базу данных',
      time: '15:15',
      date: '12.05.2023'
    },
    {
      id: 8,
      name: 'обновить пк',
      time: '16:16',
      date: '31.01.2023'
    },
    {
      id: 9,
      name: 'попросить повышение',
      time: '17:17',
      date: '27.08.2023'
    },
    {
      id: 10,
      name: 'покормить кошку',
      description: 'очень много ест',
      time: '18:18',
      date: '12.09.2023'
    },
    {
      id: 11,
      name: 'отдых',
      time: '19:19',
      date: '11.11.2023'
    },
    {
      id: 12,
      name: 'удалить сервер',
      time: '20:20',
      date: '05.10.2023'
    }
  ])
  initializeSections('inQA', [
    {
      id: 13,
      name: 'сделать тестовое',
      time: '08:08',
      date: '10.10.2023'
    },
    {
      id: 14,
      name: 'переехать',
      time: '22:22',
      date: '16.03.2023'
    },
    {
      id: 15,
      name: 'целоваться',
      description: 'со всеми подряд',
      time: '09:09',
      date: '07.02.2023'
    },
    {
      id: 16,
      name: 'обниматься',
      time: '21:21',
      date: '12.04.2023'
    },
    {
      id: 17,
      name: 'зарядка',
      time: '10:10',
      date: '17.06.2023'
    },
    {
      id: 18,
      name: 'отсылать мемасы',
      time: '20:20',
      date: '12.08.2023'
    },
    {
      id: 19,
      name: 'игнорить начальника',
      time: '11:11',
      date: '03.08.2023'
    },
    {
      id: 20,
      name: 'погулять с собакой',
      time: '19:19',
      date: '19.03.2023'
    },
    {
      id: 21,
      name: 'смотреть ютуб',
      time: '12:12',
      date: '12.02.2023'
    },
    {
      id: 22,
      name: 'встретиться с друзьями',
      time: '18:18',
      date: '07.07.2023'
    },
    {
      id: 23,
      name: 'помыться',
      time: '13:13',
      date: '01.01.2023'
    },
    {
      id: 24,
      name: 'почистить зубки',
      time: '17:17',
      date: '05.05.2023'
    },
    {
      id: 25,
      name: 'улыбаться',
      time: '14:14',
      date: '20.04.2023'
    }
  ])
  initializeSections('done', [
    {
      id: 26,
      name: 'работать',
      time: '16:16',
      date: '17.02.2023'
    },
    {
      id: 27,
      name: 'не работать',
      time: '15:15',
      date: '11.01.2023'
    }
  ])

  const sortOptions = [
    {
      label: 'по имени',
      value: 'name'
    },
    {
      label: 'по дате',
      value: 'date'
    },
    {
      label: 'по времени',
      value: 'time'
    }
  ]
  const selectedSortOption = ref('date')

  const sortedSections = computed(() => {
    const sorted = { ...sections }
    for (const sectionKey of Object.keys(sorted)) {
      sorted[sectionKey].value = sorted[sectionKey].value.sort((a, b) => {
        const dateA = new Date(a.date.split('.').reverse().join('-'))
        const dateB = new Date(b.date.split('.').reverse().join('-'))

        if (selectedSortOption.value === 'name') {
          return a.name.localeCompare(b.name)
        } else if (selectedSortOption.value === 'date') {
          return dateA - dateB
        } else if (selectedSortOption.value === 'time') {
          return a.time.localeCompare(b.time)
        }
      })
    }
    return sorted
  })

  const saveSectionsToLocalStorage = () => {
    for (const sectionKey of Object.keys(sections)) {
      localStorage.setItem(`kanban_${sectionKey}`, JSON.stringify(sections[sectionKey].value))
    }
  }

  watchEffect(() => {
    saveSectionsToLocalStorage()
  })

  const addTask = (task) => {
    sections.backlog.value.push(task)
    saveSectionsToLocalStorage()
  }

  const removeTaskById = (section, id) => {
    sections[section].value = sections[section].value.filter((task) => task.id !== id)
    saveSectionsToLocalStorage()
  }

  return {
    sections,
    sortOptions,
    selectedSortOption,
    sortedSections,
    addTask,
    removeTaskById
  }
})
