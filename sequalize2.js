
const { result } = require('lodash');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const { Op } = require("sequelize");
const Student = sequelize.define("students", {
   student_id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
   },
   name: {
       type: DataTypes.STRING,
       allowNull: false,
       primaryKey:true
   },
   age:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   cash:{
    type:DataTypes.TEXT,
    allowNull:false
   }
});

const Grade = sequelize.define("grades", {
   grade: {
       type: DataTypes.INTEGER,
       allowNull: false
   },
   marks: {
    type: DataTypes.INTEGER,
    allowNull: false
}
});

const Foo=sequelize.define("Foo",{
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});

const Bar=sequelize.define("Bar",{
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});

const grade_data = [{grade : 9,marks:20}, {grade : 10,marks:10}, {grade : 11,marks:15}]

const student_data = [
   {name : "John Baker", age:1,cash:9,gradeId: 2},
   {name : "Huj Krfgh", age:6,cash:4,gradeId: 1},
   {name : "Ryan Fisher",age:3, cash:7,gradeId: 3},
   {name : "Robert Gray",age:1,cash:6, gradeId: 2},
   {name : "Sam Lewis",age:7,cash:9, gradeId: 1}
]

//One-To-One association
Student.belongsTo(Grade, { onDelete: 'Cascade',
onUpdate: 'Cascade'
}
);

sequelize.sync({ force: true }).then(() => {
   Grade.bulkCreate(grade_data, { validate: true }).then(() => {
       Student.bulkCreate(student_data, { validate: true }).then(() => {
        Grade.update({ grade:2 }, {
            where: {
              //name: "Ryan Fisher",
              marks:20
            }
          }).then(result=>{
            console.log(result);
          }).catch('Failed');
        Grade.destroy({
            where: {
              grade:10
            }
        }).then(result=>{
            console.log(result);
        }).catch((err)=>{
            console.error('Failed to delete data : ', err);
        });
        Student.max('age', { where: { age: { [Op.lt]: 20 } } }).then(result=>{
            console.log('Maximum age is :'+result);
        }).catch((error)=>{
            console.log('Failed');
        }); 
           Student.findAll({
            where:{
                [Op.or]:{
                    name:{
                        [Op.endsWith]:
                        "John Baker"
                    },
                gradeId:{
                    [Op.gt]:2
                }
             }
            },
               include: [{
                   model:Grade
               }]
           }).then(result => {
               console.log(result);
           }).catch((error) => {
               console.error('Failed to retrieve data : ', error);
           });
        Student.findAll({
            where:{
                gradeId:2
            },
            include: [{
                model:Grade
            }]
        }).then(result=>{
            console.log(result);
        }).catch((error)=>{
            console.error('Failed to retrieve data : ',error);
        })
       }).catch((err) => { console.log(err); });
   }).catch((err) => { console.log(err); });
}).catch((error) => {
   console.error('Unable to create the table : ', error);
});

//One-To-One association
// Student.hasOne(Grade,
//     {
//         sourceKey:"name"
//     }
//     );
// sequelize.sync({ force: true }).then(() => {
//    Student.bulkCreate(student_data, { validate: true }).then(() => {
//        Grade.bulkCreate(grade_data, { validate: true }).then(() => {
//            Student.findAll({
//             where:{
//                 [Op.not]:{
//                     name:"Sam Lewis",
//                     age:{
//                         [Op.gt]:3
//                       },
//                       cash:{
//                         [Op.gt]:8
//                       }
//                 }
//             },
//                include: [{
//                 model:Grade
//                }]
//            }).then(result => {
//                console.log(result);
//            }).catch((error) => {
//                console.error('Failed to retrieve data : ', error);
//            });
//        }).catch((err) => { console.log(err); });
//    }).catch((err) => { console.log(err); });
// }).catch((error) => {
//    console.error('Unable to create the table : ', error);
//});

// One-To-Many relationship
// Grade.hasMany(Student);

// sequelize.sync({ force: true }).then(() => {
//    Grade.bulkCreate(grade_data, { validate: true }).then(() => {
//        Student.bulkCreate(student_data, { validate: true }).then(() => {
//            Grade.findAll({
//                where: {
//                    grade:11;
//                },
//                include: [{
//                    model: Student
//                }]
//            }).then(result => {
//                console.dir(result, { depth: 5 });
//            }).catch((error) => {
//                console.error('Failed to retrieve data : ', error);
//            });
//        }).catch((err) => { console.log(err); });
//    }).catch((err) => { console.log(err); });
// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });

//many-to-many relationship
// const Student = sequelize.define("students", {
//     student_id: {
//        type: DataTypes.UUID,
//        defaultValue: DataTypes.UUIDV4,
//     },
//     name: {
//        type: DataTypes.STRING,
//        allowNull: false
//     },
//     branch:{
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });

// const Course = sequelize.define("courses", {
//     course_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });

// const StudentCourse = sequelize.define('StudentCourse', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false
//     }
//   });

// const course_data = [
//     {course_name : "Science"},
//     {course_name : "Maths"},
//     {course_name : "History"}
// ]

// const student_data = [
//     {name : "John Baker",branch:"CS", courseId: 2},
//     {name : "Max Butler", branch:"IS",courseId: 1},
//     {name : "Ryan Fisher",branch:"EC", courseId: 3},
//     {name : "Robert Gray",branch:"IS", courseId: 2},
//     {name : "Sam Lewis", branch:"CS",courseId: 1}
// ]

// const student_course_data = [
//     {studentId : 1, courseId: 1},
//     {studentId : 2, courseId: 1},
//     {studentId : 2, courseId: 3},
//     {studentId : 3, courseId: 2},
//     {studentId : 1, courseId: 2},
//     {studentId : 5, courseId: 3},
// ]

// Course.belongsToMany(Student, { through: 'StudentCourse'})
// Student.belongsToMany(Course, { through: 'StudentCourse'})

// sequelize.sync({ force: true }).then(() => {
//     Course.bulkCreate(course_data, { validate: true }).then(() => {
//         Student.bulkCreate(student_data, { validate: true }).then(() => {
//             StudentCourse.bulkCreate(student_course_data, { validate: true }).then(() => {
//                 Student.findAll({
//                     where:{
//                         [Op.or]:{
//                        name:"Max Butler",
//                        branch:{
//                         [Op.eq]:"IS"
//                        }
//                         }
//                     },
//                     include: {
//                         model:Course
//                     },
//                 }).then(result => {
//                     console.log(result);
//                 }).catch((error) => {
//                     console.error('Failed to retrieve data : ', error);
//                 });
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }).catch((error) => {
//             console.log(error);
//         });
//     }).catch((error) => {
//         console.log(error);
//     });
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });
