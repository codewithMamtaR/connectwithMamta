import React from 'react';
import {  Box, Container, List, ListItem, ListItemText, tableSortLabelClasses, emphasize } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import {  Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import bi from '../assets/images/apple.webp';
import am from '../assets/images/Amruta.webp';
import su from '../assets/images/narayana.webp';
import ay from '../assets/images/Ayushi.webp';
import sai from '../assets/images/sai.webp';
import ru from '../assets/images/rush.webp';
import ad from '../assets/images/adhish.webp';
import tos from '../assets/images/toshik.webp';
import amy from '../assets/images/ameya.webp';
import ni from '../assets/images/nidhi.webp';
import sr from '../assets/images/srishti.webp';
import ha from '../assets/images/harshada.webp';
import mh from '../assets/images/mohini.webp';
import sp from '../assets/images/shiv.webp';
import st from '../assets/images/saumya.webp';
import jg from '../assets/images/jayesh.webp';
import sk from '../assets/images/shwetak.webp';
import nr from '../assets/images/nikhil.webp';
import sch from '../assets/images/shreya.webp';
import ps from '../assets/images/priya.webp';
import ansh from '../assets/images/anshuman.webp';
import jha from '../assets/images/puneet.webp';
import dth from '../assets/images/daivanti.webp';
import bp from '../assets/images/Bhagyashreepatil.webp';
import bth from '../assets/images/bencyt.webp';
import nt from '../assets/images/nishant.webp';
import ls from '../assets/images/lakshya.webp';
import rs from '../assets/images/rahul.webp';
import np from '../assets/images/niharika.webp';
import nk from '../assets/images/neha.webp';
import pb from '../assets/images/Prajwal.webp';
import my from '../assets/images/mitali.webp';
import gj from '../assets/images/govil.webp';
import ak from '../assets/images/abhi.webp';
import em from '../assets/images/ekta.webp';
import ab from '../assets/images/Ashu.webp';
import az from '../assets/images/zodpe.webp';
import as from '../assets/images/raisoni.webp';
import rt from '../assets/images/rohan.webp';
import ar from '../assets/images/arya.webp';
import ag from '../assets/images/avrita.webp';
import ank from '../assets/images/ankit.webp';
import tn from '../assets/images/tejas.webp';
import vru from '../assets/images/vrushali.webp';
import pm from '../assets/images/pranjal.webp';
import sm from '../assets/images/shashank.webp';
import sh from '../assets/images/shawani.webp';
import cm from '../assets/images/chetan.webp';
import pg from '../assets/images/pranav.webp';
import chin from '../assets/images/chinamay.webp';
import pp from '../assets/images/Pallavi.webp';
import jh from '../assets/images/jayasankar.webp';
import rk  from '../assets/images/rohit.webp';
import amal from '../assets/images/amal.webp';
import kd  from '../assets/images/kanchan.webp';
import shri  from '../assets/images/shrirang.webp';
import sara  from '../assets/images/sarang.webp';
import dar  from '../assets/images/darshan.webp';
import sar  from '../assets/images/sarvesh.webp';
import shru  from '../assets/images/shruti.webp';
import shra  from '../assets/images/shrawani.webp';
import saj  from '../assets/images/sajil.webp';
import sah  from '../assets/images/saahil.webp';
import bas  from '../assets/images/basav.webp';
import tan  from '../assets/images/tanu.webp';
import upa  from '../assets/images/upasana.webp';
import ss  from '../assets/images/shrikant.webp';
import sg  from '../assets/images/satyam.webp';
import tt  from '../assets/images/tanay.webp';
import aj  from '../assets/images/aditi.webp';
import hm  from '../assets/images/Heena.webp';
import sma from '../assets/images/shubham.webp';
import him from '../assets/images/himanshu.webp';
import sag from '../assets/images/sagar.webp';
import nish from '../assets/images/nishiket.webp';
import puj from '../assets/images/Pooja.webp';
import vin from '../assets/images/vinit.webp';
import pt from '../assets/images/pranavt.webp';
import mat from '../assets/images/maitreyee.webp';
import sumit from '../assets/images/sumit.webp';
import sub from '../assets/images/shubhramteke.webp';
import sd from '../assets/images/shweta.webp';
import rsu from '../assets/images/riya.webp';
import sid from '../assets/images/sid.webp';
import al from '../assets/images/aanchal.webp';
import zd from '../assets/images/zade.webp';
import aks from '../assets/images/akshita.webp';
import nwr from '../assets/images/nwr.webp';
import jn from '../assets/images/jai.webp';
import kis from '../assets/images/kishore.webp';
import mp from '../assets/images/medha.webp';
import doll from '../assets/images/dolly.webp';
import ai from '../assets/images/aditya.webp';
import aji from '../assets/images/ajinkya.webp';
import jay from '../assets/images/jay.webp';
import wo from '../assets/images/willis.webp';
export default function StudentList() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  
    const students = [
      {
        Name: 'A.Sai P',
        Subject: 'Python CS CBSE',
        Class: '12th',
        School: 'Montfort School,Nagpur',
        image: sai,
      },
      {
        Name: 'Riya S',
        Subject: 'OOP C++',
        Class: 'First year',
        College: 'IIIT,Pune',
        image: nwr,
      },
      {
        Name: 'Rushabh C.',
        Subject: 'Python CS CBSE',
        Class: '12th',
        School: 'Montfort School,Nagpur',
        image: ru,
      },
      
      {
        Name: 'Ayushi A',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji Mahavidyalaya,Nagpur',
        image: ay,
      },
      
      {
        Name: 'Susnata M',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Narayana Vidyalaya,Nagpur',
        image: su,
      },
      {
        Name: 'Riya S',
        Subject: 'Computer Science Python CBSE',
        Class: '11th,12th',
        School: 'Kendriya  Vidyalaya,Nagpur',
        image: rsu,
      },
      {
        Name: 'Ajinkya B',
        Subject: 'Computer Science State',
        Class: '11th,12th',
        School: 'Hemant Jakate,Nagpur',
        image: aji,
      },
      {
        Name: 'Dolly N',
        Subject: 'Computer Science Python CBSE',
        Class: '11th,12th',
        School: 'St.Paul High school,Nagpur',
        image: doll,
      },
      {
        Name: 'Siddhant K',
        Subject: ' Python ',
        Class: 'first year',
        College: 'Pallotti College,Nagpur',
        image: sid,
      },
      {
        Name: 'Jay R',
        Subject: ' C++,DS,Python in online mode ',
        Class: 'Third year,BVoc',
        College: 'Pallotti College,Nagpur',
        image: jay,
      },
      {
        Name: 'Willis O',
        Subject: ' C++,Python',
        Class: 'Online ',
        College: 'BBM,MOI university,Kenya',
        image: wo,
      },
      {
        Name: 'Amruta M',
        Subject: 'C',
        Class: 'Second Year',
        College: 'YCCE,Nagpur',
        image: am,
      },

      {
        Name: 'Tanu K',
        Subject: 'C,C++',
        Class: 'Second Year',
        College: 'Santaji Dhanaji Mahavidyalaya,Nagpur',
        image: tan,
      },
 
      {
        Name: 'Aditya S',
        Subject: 'Computer Science ',
        Class: '12th',
        School:'VTC,Nagpur',
        image: ai,
      },
      {
        Name: 'Medha P',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Royal Gondwana,Nagpur',
        image: mp,
      },
      {
        Name: 'Akshita G',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'VijayaNimbalkar,Nagpur',
        image: aks,
      },
      {
        Name: 'Aanchal K',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Royal Gondwana,Nagpur',
        image: al,
      },
      {
        Name: 'Himanshu Z',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Vijaya Nimbalkar,Nagpur',
        image: zd,
      },
      {
        Name: 'Maitreyee N',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Santaji Dhanaji,Nagpur',
        image:mat,
      },
      {
        Name: 'Vinit Y',
        Subject: ' C++ ',
        Class: 'Second year,BSc',
        School: 'Santaji Dhanaji,Nagpur',
        image:vin,
      },
      {
        Name: 'Shweta D',
        Subject: 'C,C++,DE,MP ',
        Class: 'Second year,BCA',
        College: 'Nagpur',
        image:sd,
      },
      {
        Name: 'Shubham R',
        Subject: ' Advanced C ',
        Class: 'Second year',
        College: 'Govt Polytechnic College,Nagpur',
        image:sub,
      },
      {
        Name: 'Pranav T',
        Subject: ' C++ ',
        Class: 'Second year',
        College: 'Priyadarshani College,Nagpur',
        image:pt,
      },
      {
        Name: 'Pooja C',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Narayana Vidyalaya,Nagpur',
        image: puj,
      },
      {
        Name: 'Sagar D',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Smt JankiDevi Jaiswal College,Nagpur',
        image: sag,
      },
      {
        Name: 'Nishiket D',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Kamla Nehru,Nagpur',
        image: nish,
      },
      {
        Name: 'Kishore',
        Subject: 'C,C++',
        Class: 'third Year',
        College: 'Polytechnic,Nagpur',
        image: kis,
      },
      {
        Name: 'Jay N',
        Subject: 'C,C++',
        Class: 'third Year',
        College: 'Polytechnic,Nagpur',
        image: jn,
      },
      {
        Name: 'Sumit D',
        Subject: 'OOM,Multimedia,OS,DBMS',
        Class: 'sec,third,final year',
        School: 'TGPCE,Nagpur',
        image: sumit,
      },
      {
        Name: 'Tanaya T',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Prerna College,Nagpur',
        image: tt,
      },
      {
        Name: 'Heena M',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'MKH Sancheti College,Nagpur',
        image: hm,
      },
      {
        Name: 'Aditi J',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Khatri College,Chandrapur',
        image: aj,
      },
      {
        Name: 'Sahil S',
        Subject: 'Computer Science state',
        Class: '12th',
        School: 'Radha Maha Vidyalaya,Nagpur',
        image: sah,
      },
      {
        Name: 'Upasana K',
        Subject: 'Core java',
        Class: 'Sec year,MCA',
        College: 'Nagpur',
        image: upa,
      },
      {
        Name: 'Basawraj H',
        Subject: 'Computer Science state',
        Class: '12th',
        School: 'Dinanath College,Nagpur',
        image: bas,
      },
      {
        Name: 'Darshana N',
        Subject: 'C++',
        Class: 'B.tech',
        College: 'Manipal Institute of Technology ,Nagpur',
        image: dar,
      },
      {
        Name: 'Shubham M',
        Subject: 'C',
        Class: 'second year',
        College: 'Govt.Polytechnic ,Nagpur',
        image: sma,
      },
      {
        Name: 'Shrirang S',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Shri Niketan High School,Nagpur',
        image: shri,
      },
      {
        Name: 'Saranga S',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Shri Niketan High School,Nagpur',
        image: sara,
      },
      {
        Name: 'Himanshu K',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Vijaya Nimbalkar,Nagpur',
        image: him,
      },
      {
        Name: 'Kanchan D',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'MKH Sancheti,Nagpur',
        image: kd,
      },
      {
        Name: 'Shrikant S',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Vijaya Nimbalkar,Nagpur',
        image: ss,
      },
      {
        Name: 'Satyam G',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Vijaya Nimbalkar,Nagpur',
        image: sg,
      },
   
      {
        Name: 'Sajil J',
        Subject: 'Computer Science state',
        Class: '11th,12th',
        School: 'Taywade,Nagpur',
        image: saj,
      },
      {
        Name: 'Shruti J',
        Subject: 'Computer Science state',
        Class: '11th,12th',
        School: 'MKH Sancheti public school,Nagpur',
        image: shru,
      },
      {
        Name: 'Shrawani M',
        Subject: 'Computer Science state',
        Class: '11th,12th',
        School: 'Dr.Ambedkar College,Nagpur',
        image: shra,
      },
      {
        Name: 'Sarwesh J',
        Subject: 'Computer Science state',
        Class: '11th,12th',
        School: 'Mokhare college,Nagpur',
        image: sar,
      },
      {
        Name: 'Adhish P',
        Subject: 'C, C++ ,Java',
        Class: 'Second year Polytechnic',
        College: 'Govt.Polytechnic,Nagpur',
        image: ad,
      },
      {
        Name: 'Toshik G',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Royal Gondwana,Nagpur',
        image: tos,
      },
      {
        Name: 'Ameya K',
        Subject: 'C,C++,DS',
        Class: 'Second year ,B.E',
        College: 'Bhausaheb college of Engineering,Nagpur',
        image: amy,
      },
      {
        Name: 'Nidhi J',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Montfort,Nagpur',
        image: ni,
      },
      {
        Name: 'Srishti V',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Major Hemat Jakate,Nagpur',
        image: sr,
      },
      {
        Name: 'Harshada A',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'School of Scholars,Nagpur',
        image: ha,
      },
      {
        Name: 'Mohini H',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Somalwar Nikalas,Nagpur',
        image: mh,
      },
      
      {
        Name: 'Shivani P',
        Subject: 'C,C++',
        Class: 'Second year',
        College: 'NYSS College,Nagpur',
        image: sp,
      },
      
      {
        Name: 'Saumya T',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Bhartiya Vidya Bhavan,Nagpur',
        image: st,
      },
      {
        Name: 'Jayesh G',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Sindhi Hindi High School,Nagpur',
        image: jg,
      },
      {
        Name: 'Shweta K',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Kendriya Vidyalaya,Nagpur',
        image: sk,
      },
      {
        Name: 'Shreya C',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Kendriya Vidyalaya,Nagpur',
        image: sch,
      },
      {
        Name: 'Nikhil R',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Dinanath Junior college,Nagpur',
        image: nr,
      },
      {
        Name: 'Priya S',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'MKH Sancheti,Nagpur',
        image: ps,
      },
      {
        Name: 'Anshuman C',
        Subject: 'C , C++',
        Class: 'Final year B.E.',
        College: 'Raisoni college of Engg,Nagpur',
        image: ansh,
      },


      {
        Name: 'Puneet J',
        Subject: 'DS , C++',
        Class: 'Second  year B.E.',
        College: 'Government college of Engg,Nagpur',
        image: jha,
      },
      {
        Name: 'Daivanti T',
        Subject: 'DS , C++',
        Class: 'First year B.E.',
        College: 'college of Engg,Pune',
        image: dth,
      },
      {
        Name: 'Bency T',
        Subject: 'C , C++',
        Class: 'First year B.E.',
        School: 'college of Engg,Nagpur',
        image: bth,
      },
      {
        Name: 'Bhagyashree P',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Nagpur',
        image: bp,
      },
      {
        Name: 'Nishant T',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Shivaji Science College,Nagpur',
        image: nt,
      },
      {
        Name: 'Lakshya S',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Vijaya Nimbalkar,Nagpur',
        image: ls,
      },
      {
        Name: 'Niharika P',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Montfort,Nagpur',
        image: np,
      },
      {
        Name: 'Rahul S',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji Mahavidyalya,Nagpur',
        image: rs,
      },
      {
        Name: 'Prajwal B',
        Subject: 'C,C++',
        Class: 'Second year',
        College: 'St vincent pallotti college of Engg ,Nagpur',
        image: pb,
      },
      {
        Name: 'Neha K',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'School of scholars,Nagpur',
        image: nk,
      },
      
      {
        Name: 'Mitali Y',
        Subject: 'C, C++',
        Class: 'second year',
        College: 'Nagpur',
        image: my,
      },
      {
        Name: 'Govil J',
        Subject: 'Advanced C',
        Class: 'second year,B.E',
        College: ',Govt College of Engg,Nagpur',
        image: gj,
      },
      {
        Name: 'Abhijeet  K',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Yashoda high school,Nagpur',
        image: ak,
      },
      {
        Name: 'Ekta M',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Narayana Vidyalaya,Nagpur',
        image: em,
      },
      {
        Name: 'Ashutosh B',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Taywade,Nagpur',
        image: ab,
      },
      {
        Name: 'Aditya Z',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji Mahavidyalaya,Nagpur',
        image: az,
      },
      {
        Name: 'Akhilesh S',
        Subject: 'C++',
        Class: 'Sec year,B.E',
        College: 'Raisoni College,Nagpur',
        image: as,
      },
      
      {
        Name: 'Rohan T',
        Subject: 'C,Maths,Electronics',
        Class: 'Sec year,B.E',
        College: 'Kirana Pandava,Nagpur',
        image: rt,
      },
      
      {
        Name: 'Arya S',
        Subject: 'C++',
        Class: 'Third year',
        College: 'Nikalas Mahavidyalya,Nagpur',
        image: ar,
      },
      {
        Name: 'Avrita G',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Ysahoda high school,Nagpur',
        image: ag,
      },
      {
        Name: 'Ankiit M',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji Mahavidyalaya ,Nagpur',
        image: ank,
      },
      {
        Name: 'Tejas N',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Dr.Bower Apostolic Jr.College,Nagpur',
        image: tn,
      },
      {
        Name: 'Vrushali T',
        Subject: 'C++',
        Class: 'second year',
        College: 'YCCE,Nagpur',
        image: vru,
      },
      {
        Name: 'Pranjal M',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji,Nagpur',
        image: pm,
      },
      {
        Name: 'Shashank M',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Modern School,Nagpur',
        image: sm,
      },
      {
        Name: 'Shawani H',
        Subject: 'OOP',
        Class: 'Second year',
        School: 'Raisoni College,Nagpur',
        image: sh,
      },
      {
        Name: 'Chetan M',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'New Apostolic,Nagpur',
        image: cm,
      },
      {
        Name: 'Chinmay M',
        Subject: 'C',
        Class: 'Second year',
        College: 'YCCE,Nagpur',
        image: chin,
      },
      {
        Name: 'Pranav G',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji,Nagpur',
        image: pg,
      },
      {
        Name: 'Jaishankar G',
        Subject: 'C',
        Class: 'second year,B.E',
        College: 'Amrita College of Engg,Nagpur',
        image: jh,
      },
      {
        Name: 'Pallavi P',
        Subject: 'C,DS',
        Class: 'First Year',
        College: 'Nagpur',
        image: pp,
      },
      {
        Name: 'Amal S',
        Subject: 'Computer science C++ ,CBSE',
        Class: '12th',
        School: 'School of scholars,Nagpur',
        image: amal,
      },
      {
        Name: 'Rohit K',
        Subject: 'C',
        Class: 'Final year year,B.Tech',
        College: 'Nagpur',
        image: rk,
      },

    ];





  return (
    <>

<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 3,
    justifyContent: 'center',
    width: '100%',
    px: 2
  }}
>
  {students.map((student, index) => (
    <Box
      key={index}
      sx={{
        width: {
          xs: '100%',   // mobile
          sm: '80%',    // small tablets
          md: '45%',    // medium screens
          lg: '30%'     // laptop
        }
      }}
    >
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          height: '100%'
        }}
      >
        <CardMedia
          component="img"
          image={student.image}
          alt={student.Name}
          sx={{
            height: 200,
            objectFit: 'cover',
            borderRadius: 2
          }}
        />

        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {student.Name}
          </Typography>

          <Typography variant="body1">
            Subject: {student.Subject}
          </Typography>

          <Typography variant="body1">
            Class: {student.Class}
          </Typography>

          {student.College ? (
            <Typography variant="body1">
              College: {student.College}
            </Typography>
          ) : (
            <Typography variant="body1">
              School: {student.School}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  ))}
</Box>


      
          </>
        );
      }
