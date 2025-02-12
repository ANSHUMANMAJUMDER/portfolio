import styles from './SkillsStyle.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
function Skills() {
    const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <div>
      <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
         <SkillList src={checkMarkIcon} skill='HTML'/>
         <SkillList src={checkMarkIcon} skill='CSS'/>
         <SkillList src={checkMarkIcon} skill='Javascript'/>
         <SkillList src={checkMarkIcon} skill='Jquery'/>
         </div>
         <hr />
         <div className={styles.skillList}>
         <SkillList src={checkMarkIcon} skill='React.Js'/>
         <SkillList src={checkMarkIcon} skill='SQL'/>
         <SkillList src={checkMarkIcon} skill='PHP'/>
         <SkillList src={checkMarkIcon} skill='Codeigniter'/>
         </div>
         <hr />
         <div className={styles.skillList}>
         <SkillList src={checkMarkIcon} skill='Laravel'/>
         <SkillList src={checkMarkIcon} skill='Tailwind.css'/>
         <SkillList src={checkMarkIcon} skill='Python'/>
        </div>
      </section>
        
    </div>
  )
}

export default Skills

