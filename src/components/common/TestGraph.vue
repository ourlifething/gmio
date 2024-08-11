<script setup lang="ts">
import { ref } from 'vue'
defineEmits<{
  handleClick: [cardSet]
}>()
type peopleCard = {
  title: string
  type: number
  card: {
    Id: number
    employee_id: number
    name: string
    type: number
    color: number
  }
}
type cardSet = { cardSet: { id: number; option: string; associatedPeopleCard: peopleCard } }

type recordList = {
  id: number
  authority: number
  dataList: Array<{ key: number; value: string }>
  cardList: Array<cardSet>
}
const recordSpacesBlankCard: recordList = {
  id: 0,
  authority: 0,
  dataList: [{ key: 0, value: '' }],
  cardList: [
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '田中', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '後藤', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '岩橋', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '小藪', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '松本', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '千原', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '高橋', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '大吾', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: 'のぶ', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '佐藤', type: 0, color: 0 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '花丸', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '大吉', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '田中', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '後藤', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '岩橋', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '小藪', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '松本', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '千原', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '高橋', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '大吾', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: 'のぶ', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '藤', type: 0, color: 0 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '丸', type: 0, color: 8 }
        }
      }
    },
    {
      cardSet: {
        id: 0,
        option: '',
        associatedPeopleCard: {
          title: '',
          type: 0,
          card: { Id: 0, employee_id: 0, name: '大台', type: 0, color: 8 }
        }
      }
    }
  ]
}

const cardListRow = ref<cardSet[]>([])
for (const record of recordSpacesBlankCard.cardList) {
  cardListRow.value.push(record)
}
console.log(cardListRow.value)
cardListRow.value.length %12 === 0 ? :

const recordLists = ref<cardSet[][]>([])
for (let i = 0; i < cardListRow.value.length/12; i++) {
  const rowData: cardSet[] = []
  for (let j=0;j< 12; j++) {
    rowData.push(cardListRow.value[j+ i*12])
  }
  recordLists.value.push(rowData)
}
</script>

<template>
  <div>
    <p>test</p>
  </div>
  <table>
    <tr v-for="(rowList, rowIndex) in recordLists" :key="rowIndex">
      <td v-for="(recordList, colIndex) in rowList" :key="colIndex">
        <p @click="$emit('handleClick', recordList)">
          {{ recordList.cardSet.associatedPeopleCard.card.name }}
        </p>
      </td>
    </tr>
  </table>
</template>
