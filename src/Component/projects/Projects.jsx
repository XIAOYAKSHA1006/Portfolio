import ProjectBox from './ProjectBox/ProjectBox';
import './Projects.css';
export default function Projects(){

    const ProjectData=[
        {
            image:'https://play-lh.googleusercontent.com/KZTO1L6r8CzWlg2InJoU_ndRAuvYiaS-35MyYdDPeeVCPNVfM9SBY2qRGjvvADmDIR8',
            title:'Tic Tac Toe',
            sentences: [
                "One of my projects involved developing a classic Tic Tac Toe game using Java, which highlights my proficiency in object-oriented programming and game development. This project includes a user-friendly graphical interface, allowing players to engage in the game either against another player or an AI opponent. I implemented the game logic to handle various scenarios, including win detection, draw conditions, and ensuring valid moves. The AI opponent was designed using basic algorithms to provide a challenging experience for users. Additionally, the project features a clean and responsive interface, making it enjoyable to play. This Tic Tac Toe game not only demonstrates my technical skills in Java but also my ability to design interactive and engaging applications, ensuring a seamless user experience from start to finish.",

             ],
             link:"https://github.com/XIAOYAKSHA1006/Java-projects/blob/main/TicTacToe.java" 
        },
        {
            image:'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds',
            title:'ToDoListApp',
             sentences: [
                "As a part of my development portfolio, I created a robust and user-friendly to-do list application using Java. This project demonstrates my proficiency in Java programming and my ability to design and implement practical software solutions. The application features a clean and intuitive interface that allows users to easily add, edit, and delete tasks. I utilized object-oriented programming principles to ensure the codebase is modular and maintainable. Additionally, I implemented features such as task prioritization, due dates, and categorization, enhancing the application's functionality and usability. To ensure data persistence, I integrated file I/O operations, allowing users to save and load their task lists seamlessly. This project not only showcases my technical skills in Java but also my attention to detail and commitment to creating effective and user-centric applications.",
             ],
             link:"https://github.com/XIAOYAKSHA1006/Java-projects/blob/main/TodoListApp.java" 
        },
        {
            image:'https://miro.medium.com/v2/resize:fit:450/1*8xH405qb-LdRQk7KCSw45g.png',
            title:'Twitter Sentiment Analysis',
             sentences: [
                "For one of my notable projects, I developed a Twitter sentiment analysis tool using Python, aimed at analyzing customer sentiment towards major U.S. airlines. This project involved scraping Twitter data from February 2015 and classifying tweets as positive, negative, or neutral based on their content. Utilizing a dataset that included features such as tweet ID, sentiment, sentiment confidence, negative reason, airline, retweet count, and tweet text, I applied natural language processing (NLP) techniques to preprocess and analyze the data. By leveraging libraries such as NLTK and Scikit-learn, I created a machine learning model capable of accurately predicting the sentiment of each tweet. This project not only showcased my skills in Python programming and data science but also provided valuable insights into customer perceptions and issues faced by major airlines. Through this analysis, I demonstrated my ability to handle real-world data and derive meaningful conclusions to inform business decisions.",

             ],
             link:"https://github.com/XIAOYAKSHA1006/Python-projects/blob/main/subham%20twitter%20sentiment%20.ipynb" 
        },
    ];
    return(
        <div>
            <p className='projects_title'>Projects</p>
            <br/>
            <br/>
            <div className='project_box_container'>
                {
                    ProjectData.map((project,index) => (
                        <ProjectBox
                        key={project.title}
                        title={project.title}
                        image={project.image}
                        sentences={project.sentences}
                        link={project.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}