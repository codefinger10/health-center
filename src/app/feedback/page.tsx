import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/header.module.scss';
import { SlEnvolopeLetter, SlGhost } from 'react-icons/sl';

const About = (): JSX.Element => {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <Link key="feedback" href="feedback" className={styles.box}>
            <SlEnvolopeLetter />
          </Link>,
          <Link key="about" href="about" className={styles.box}>
            <SlGhost />
          </Link>,
        ]}
      />
      <main>피드백 소개입니다</main>
    </>
  );
};

export default About;
