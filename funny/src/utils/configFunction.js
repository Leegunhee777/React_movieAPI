import giraffe1 from '../media/animal/giraffe_1.jpg';
import giraffe2 from '../media/animal/giraffe_2.jpg';
import giraffe3 from '../media/animal/giraffe_3.jpg';
import lion1 from '../media/animal/lion_1.jpg';
import lion2 from '../media/animal/lion_2.jpg';
import lion3 from '../media/animal/lion_3.jpg';
import tiger1 from '../media/animal/tiger_1.jpg';
import tiger2 from '../media/animal/tiger_2.jpg';
import tiger3 from '../media/animal/tiger_3.jpg';
import apple1 from '../media/fruit/apple_1.jpg';
import apple2 from '../media/fruit/apple_2.jpg';
import apple3 from '../media/fruit/apple_3.jpg';
import banana1 from '../media/fruit/banana_1.jpg';
import banana2 from '../media/fruit/banana_2.jpg';
import banana3 from '../media/fruit/banana_3.jpg';
import pear1 from '../media/fruit/pear_1.jpg';
import pear2 from '../media/fruit/pear_2.jpg';
import pear3 from '../media/fruit/pear_3.jpg';

const category = {
    animal :[
        {
            id:'giraffe',
            src:[giraffe1,giraffe2,giraffe3],
            des:'길다'
        },
        {
            id:'lion',
            src:[lion1,lion2,lion3],
            des:'갈퀴'
        },
        {
            id:'tiger',
            src:[tiger1,tiger2,tiger3],
            des:'줄무늬'
        }
    ],
    fruit:[
        {
            id:'apple',
            src:[apple1,apple2,apple3],
            des:'빨강'
        },
        {
            id:'banana',
            src:[banana1,banana2,banana3],
            des:'노랑'
        },
        {
            id:'pear',
            src:[pear1,pear2,pear3],
            des:'하양'
        }
    ]
}

 export function getCategory(search){
    // const a = category.animal.filter((animal) => {
    //     return animal.id === 'tiger'
    //  });
    //  console.log(a[0]);
     switch(search){
      case 'ANIMAL'
      : return category.animal

      case 'FRUIT'
      :  return category.fruit

     }
 }

 export function getCategoryData(datas, id) {
     if (typeof datas === 'object') {
        return datas.filter((data) => data.id === id)[0]; //이새끼는 tiger가 위에 배열에서 중복된 값일일 없고 하나만있으니까 [0]으로 넣는거고
     }
 }

 const category2 = [
    {
        id:'giraffe',
        src:[giraffe1,giraffe2,giraffe3],
        des:'길다',
        type: 'animal'
    },
    {
        id:'lion',
        src:[lion1,lion2,lion3],
        des:'갈퀴',
        type: 'animal'
    },
    {
        id:'tiger',
        src:[tiger1,tiger2,tiger3],
        des:'줄무늬',
        type: 'animal'
    },
    {
        id:'apple',
        src:[apple1,apple2,apple3],
        des:'빨강',
        type: 'fruit'
    },
    {
        id:'banana',
        src:[banana1,banana2,banana3],
        des:'노랑',
        type: 'fruit'
    },
    {
        id:'pear',
        src:[pear1,pear2,pear3],
        des:'하양',
        type: 'fruit'
    }
];

export function test (type) {
    return category2.filter((category) => category.type === type)  //이새끼는 type값이 하나가 아니라 여러개가 들어오니 그거 자체를 통으로 넘겨야해서 이렇게 쓰는거임
}