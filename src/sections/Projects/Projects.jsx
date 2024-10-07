import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link={'https://www.google.de/'} h3='Viberr' p='Streaming App' />
        <ProjectCard src={freshBurger} link={'https://www.youtube.com/'} h3='Fresh Burger' p='Another Streaming App' />
        <ProjectCard src={hipsster} link={'https://www.iwkz.de/'} h3='Hipsster' p='IWKZ Website' />
      </div>
    </section>
  )
}

export default Projects
