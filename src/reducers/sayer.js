import {
  ADD_TOPIC,
  REMOVE_TOPIC,
  ADD_COMMENT,
} from '../constants/ActionTypes';

const itemsList = [
  {
    id: 0,
    text: 'First item with customized long title',
    comments: [
      {
        id: 0,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 1,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      }]

  },
  {
    id: 1,
    text: 'Second item',
    comments: []

  },
  {
    id: 2,
    text: 'Third item (short one)',
    comments: [
      {
        id: 0,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 1,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 2,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 3,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 4,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 6,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 7,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 8,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 9,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 10,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 11,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 12,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 13,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 14,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 15,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 16,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        avatarClass: 'male',
      },
      {
        id: 17,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
      {
        id: 18,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..',
        avatarClass: 'female',
      },
    ]
  },
];

// get data from the local storage
// if NULL, set default data
const dataFromLocalStorage = localStorage.getItem('itemsList');
const isEmpty = dataFromLocalStorage !== null && dataFromLocalStorage.length;

if (!isEmpty) localStorage.setItem('itemsList', JSON.stringify(itemsList));

const initialState = isEmpty ? JSON.parse(dataFromLocalStorage) : itemsList;

export default function sayer(state = initialState, action) {
  let modifiedObj = void 0;

  const modifyLocalStorage = obj => localStorage.setItem('itemsList', JSON.stringify(obj));

  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TOPIC:

    modifiedObj = [      
      {
        id: state.reduce((maxId, topic) => Math.max(topic.id, maxId), -1) + 1,
        text: action.text,
        comments: [],
      }, 
      ...state
    ];

    modifyLocalStorage(modifiedObj);

    return modifiedObj;

    case REMOVE_TOPIC:

    modifiedObj = state.filter(topic => (topic.id !== action.id));

    modifyLocalStorage(modifiedObj);

    return modifiedObj;

    case ADD_COMMENT:

    modifiedObj = state.map((item) => {
      if (Number(item.id) === Number(action.id)) {
        return Object.assign({}, {
          ...item, 
          comments: [...item.comments, {
            id: item.comments.reduce((maxId, topic) => Math.max(topic.id, maxId), -1) + 1,
            avatarClass: item.comments.length % 2 === 1 ? 'male' : 'female',
            text: action.text,
          }]
        })
      }

      return item;
    });

    modifyLocalStorage(modifiedObj);

    return JSON.parse(localStorage.getItem('itemsList'));

    default:
    return state;
  }
}