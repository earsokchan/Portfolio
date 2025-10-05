import React, { useState } from 'react'
import styled from 'styled-components'

const colors = {
  primary: '#26A69A',
  primaryHover: '#00897B',
  secondary: '#607D8B',
  secondaryHover: '#455A64',
  background: '#F5F7FA',
  cardBackground: '#FFFFFF',
  textPrimary: '#263238',
  textSecondary: '#607D8B',
  shadow: 'rgba(0, 0, 0, 0.08)',
  shadowHover: 'rgba(0, 0, 0, 0.16)',
  modalOverlay: 'rgba(0, 0, 0, 0.4)',
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const Card = styled.div`
  background: ${colors.cardBackground};
  border-radius: 16px;
  box-shadow: 0 4px 24px ${colors.shadow};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 8px 32px ${colors.shadowHover};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 0.75rem;
`;

const CardActions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
`;

const Button = styled.button`
  background: ${colors.primary};
  color: ${colors.cardBackground};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${colors.primaryHover};
  }
`;

const LinkButton = styled.a`
  background: ${colors.background};
  color: ${colors.primary};
  border: 1px solid ${colors.secondary};
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s ease;
  &:hover {
    background: ${colors.secondaryHover};
    color: ${colors.cardBackground};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.modalOverlay};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: ${colors.cardBackground};
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  padding: 2rem;
  box-shadow: 0 8px 32px ${colors.shadowHover};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${colors.textSecondary};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${colors.textPrimary};
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ModalHeader = styled.div`
  text-align: center;
`;

const ModalTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ModalSection = styled.div`
  margin-top: 1rem;
`;

const ModalSectionTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-bottom: 0.75rem;
`;

const projects = [
  {
    img: "img/targetclothe-preview.jpg",
    alt: "Target Clothe",
    title: "Target Clothe",
    description: "A full-stack e-commerce platform for clothing, built with a user-friendly UI, secure payment integration supporting all Cambodian banks, and responsive design.",
    link: "https://www.targetclothe.com/",
    gallery: []
  },
  {
    img: "img/room-system-image/photo_6287428734176838546_y.jpg",
    alt: "Room System",
    title: "Room System",
    description: "A full-stack web app for businesses, providing an easy-to-use platform for customers to book rooms, featuring a responsive design and secure payment integration.",
    link: "https://roomsystem-kh.vercel.app/",
    gallery: [
      "img/room-system-image/photo_6287428734176838546_y.jpg",
      "img/room-system-image/roomssystem (4).jpg",
      "img/room-system-image/roomssystem (5).jpg",
      "img/room-system-image/roomssystem (6).jpg",
      "img/room-system-image/roomssystem (2).jpg",
      "img/room-system-image/roomssystem (1).jpg"
    ]
  },
  {
    img: "img/room-system-image/image.png",
    alt: "Target Clothe Admin",
    title: "Target Clothe Admin",
    description: "It a Admin Dashoard for Target Clothe, built with React and Node.js, providing a comprehensive management system for products, orders, and users.",
    link: "https://earsokchan-portfolio.vercel.app/cv/EarSokchan_Cv.pdf",
    gallery: [
    ]
  },
  {
    img: "img/image copy 2.png",
    alt: "Laravel + Flutter",
    title: "Laravel + Flutter App",
    description: "A cross-platform mobile app powered by Laravel backend and Flutter frontend, supporting real-time updates and notifications.",
    link: "https://youtu.be/niyT61JHwM8?si=U09U_OUvCXloy37n",
    gallery: []
  },
  {
    img: "img/pwa-preview.jpg",
    alt: "My PWA",
    title: "Progressive Web App",
    description: "A PWA built with React, offering offline support, push notifications, and installable experience on any device.",
    link: "https://my-pwa-flame.vercel.app/",
    gallery: []
  },
  {
    img: "img/chatapp-preview.jpg",
    alt: "Chat App",
    title: "Chat Application",
    description: "A real-time chat application with group messaging, emoji support, and responsive UI, built using React and Socket.io.",
    link: "https://chat-app-lf6y.vercel.app/",
    gallery: []
  },
  {
    img: "img/stylish-preview.jpg",
    alt: "Stylish",
    title: "Stylish Portfolio",
    description: "A stylish personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
    link: "https://stylish-indol.vercel.app/",
    gallery: []
  },
  {
    img: "img/image.png",
    alt: "Admin React+Node Project",
    title: "Admin Dashboard (React + Node)",
    description: "A full-featured admin dashboard with analytics, user management, and RESTful API integration.",
    link: "https://earsokchan-portfolio.vercel.app",
    gallery: []
  },
  {
    img: "img/image copy.png",
    alt: "Admin PHP",
    title: "Admin Panel (PHP)",
    description: "A classic PHP-based admin panel for managing e-commerce products, orders, and users.",
    link: "https://github.com/Sokchan3434456677/ecom-php.git",
    gallery: []
  },
  {
    img: "img/image copy 3.png",
    alt: "React + Laravel",
    title: "React + Laravel Project",
    description: "A modern web app combining React frontend with Laravel backend, featuring authentication and RESTful APIs.",
    link: "https://youtu.be/KAowhxraZ2A?si=C-GvEmB2kRSoQ4UK",
    gallery: []
  },
   {
    img: "img/Screenshot 2025-10-05 222150.png",
    alt: "Nextjs",
    title: "Build a menu online",
    description: "This a menu online For Pisey Slon.",
    link: "https://menu-commerce-client.vercel.app/",
    gallery: []
  }
];

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
        </div>
        <CardGrid>
          {projects.map((project, idx) => (
            <Card key={idx}>
              <CardImage src={project.img} alt={project.alt} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <p style={{color: "#555", fontSize: "1rem", marginBottom: " 1rem"}}>{project.description.slice(0, 80)}...</p>
                <CardActions>
                  <Button onClick={() => setModalProject(project)}>Details</Button>
                  <LinkButton href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit
                  </LinkButton>
                </CardActions>
              </CardBody>
            </Card>
          ))}
        </CardGrid>
        {modalProject && (
          <ModalOverlay onClick={() => setModalProject(null)}>
            <ModalContent onClick={e => e.stopPropagation()}>
              <CloseBtn onClick={() => setModalProject(null)}>×</CloseBtn>
              <ModalHeader>
                <ModalTitle>{modalProject.title}</ModalTitle>
                <ModalDescription>{modalProject.description}</ModalDescription>
              </ModalHeader>
              <img src={modalProject.img} alt={modalProject.alt} style={{width: "100%", maxHeight: "300px", borderRadius: "8px", objectFit: "cover", marginBottom: "1rem"}} />
              {modalProject.gallery.length > 0 && (
                <ModalSection>
                  <ModalSectionTitle>Gallery</ModalSectionTitle>
                  <ImageGallery>
                    {modalProject.gallery.map((img, idx) => (
                      <GalleryImage key={idx} src={img} alt={`${modalProject.title} image ${idx + 1}`} />
                    ))}
                  </ImageGallery>
                </ModalSection>
              )}
              <ModalSection>
                <LinkButton href={modalProject.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </LinkButton>
              </ModalSection>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </div>
  )
}