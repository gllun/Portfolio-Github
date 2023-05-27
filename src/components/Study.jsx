import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { study } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ study }) => (
  <VerticalTimelineElement contentStyle={{background: '#1d1836', color: '#FFF'}}
  contentArrowStyle={{ borderRight: '7px solid #232631 '}} date={study.date}
  iconStyle={{ background: study.iconBg}} icon={ <div className="flex justify-center items-center w-full h-full" ><img src={study.icon} alt={study.company_name}
  className="w-[60%] h-[60%] object-contain"/></div> }>
    <div>
      <h3 className="text-white text-[24px] font-bold">{study.title}</h3>
      <p className="text-white-100 text-[16px] font-semibold" style={{margin: 0}}>{study.ville}</p>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{study.obtenu}</p>
    </div>
    <div className="mt-5 list-disc space-y-2">
      <p className="text-white-100 text-[16px] font-semibold" style={{margin: 0}}>Diplôme: {study.diplome}</p>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>Option: {study.option}</p>
    </div>
    {/* <ul className="mt-5 list-disc ml-5 space-y-2">
      {study.points.map((point, index) => (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul> */}
    </VerticalTimelineElement>
)

const Study = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={ styles.sectionHeadText }>Scolarité</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {study.map((study, index) => (
            <ExperienceCard key={index} study={study} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper( Study, "scolarite")