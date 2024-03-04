'use client';
import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import { SlActionRedo } from 'react-icons/sl';

export default function Home() {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <button
            key="share"
            className={styles.box}
            onClick={() => {
              alert('지도공유');
            }}
          >
            <SlActionRedo />
          </button>,
          <Link key="feedback" href="/feedback" className={styles.box}>
            피드백
          </Link>,
          <Link key="about" href="/about" className={styles.box}>
            서비스소개
          </Link>,
        ]}
      />
      <main>테스트</main>
    </>
  );
}