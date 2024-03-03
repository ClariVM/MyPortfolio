import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";


const CardsList = () => {

    const cards = [
        {
            image1: "/public/assets/mdhl-rules.png", image2: "/public/assets/mdhl-info.png",image3: "/public/assets/mdhl-form.png", 
            title: "Mighty Ducks hokey league", 
            description: "In this project, I developed the website for a hockey league using only CSS and HTML. The website includes relevant information about the league rules, registration form, match schedule, and location.", 
            icon:<FaGithub />,
            linkPage:"https://clarivm.github.io/MDHL-Merlo/index.html", linkGit:"https://github.com/ClariVM/MDHL-Merlo/tree/Task4"
        },
        
        {
            image1: "/public/assets/amazingevents-home.png", image2: "/public/assets/amazingevents-details.png",image3: "/public/assets/amazingevents-stats.png", 
            title: "Amazing Events", 
            description: "In this project, I developed a responsive web application using HTML, CSS, and JavaScript. Additionally, I integrated an API to enhance functionality and provide dynamic data to users.", 
            icon:<FaGithub />,
            linkPage:"https://clarivm.github.io/amazing-events-Merlo/", linkGit:"https://github.com/ClariVM/amazing-events-Merlo/tree/task4"
        },
        
        {
            image1: "/public/assets/homebanking-accounts.png", image2: "/public/assets/homebanking-accountdetails.png",image3: "/public/assets/homebanking-cards.png", 
            title: "Homebanking", 
            description: "This challenging project involved creating a home banking app with Java, Gradle, and SpringBoot. Within the app, users can request loans, credit cards, perform transfers, view transaction history, among other features.",
            icon:<FaGithub/>,
            linkGit:"https://github.com/ClariVM/ClaribelMerlo-Homebanking/tree/task11"
        },

        {
            image1: "/public/assets/toDo-home.png", image2: "/public/assets/toDo-tarea.png",image3: "/public/assets/toDo-filter.png", 
            title: "To Do List", 
            description: "This project was carried out in collaboration with a colleague. This to-do list was created to apply what we learned in the React course. Additionally, it saves changes in local storage.",
            icon:<FaGithub/>,
            linkPage:"https://todo-list-clari.vercel.app/", linkGit:"https://github.com/OctavioLucardiFierro/Grupo1-ReactJS-ArgentinaPrograma2023"
        },

        {
            image1: "/public/assets/login.png", image2: "/public/assets/login-users.png",image3: "/public/assets/login-alta.png", 
            title: "Login", 
            description: "This login system was developed as a project for the Object-Oriented Programming (OOP) course with Java. Fundamental OOP concepts and CRUD operations were applied and practiced.",
            icon:<FaGithub/>,
            linkGit:"https://github.com/ClariVM/LoginJavaSwing/tree/loginCompleto"
        },
    ]


  return (
    <div className='containerCards'>
        {cards.map((card, index)=>(
            <Card key={index} style={{ width: '25rem' }}>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <Card.Img variant="top" src={card.image1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src={card.image2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src={card.image3} />
                    </Carousel.Item>
                </Carousel>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.description}
              </Card.Text>
              {card.linkGit && (
                <a href={card.linkGit} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">{card.icon}</Button>
                </a>
                )}
                {card.linkPage &&(
                    <a href={card.linkPage} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary"><FaLink /></Button>
                    </a>
                )}
            </Card.Body>
          </Card>
        ))}
        
    </div>
  )
}


export default CardsList

