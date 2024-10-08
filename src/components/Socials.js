import React from "react";
import styled from "styled-components";
// export const Mail = () => {
//   return (
//     <Social href="mailto:meadamann2002@gmail.com">
//       {/* <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 24V9H24H4V24V39H24" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 36L36 40L44 30" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9L24 24L44 9" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg> */}
//       {/* <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M44 24V9H24H4V24V39H24" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
//         <path d="M31 36L36 40L44 30" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
//         <path d="M4 9L24 24L44 9" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
//         <path d="M4 9Q24 22 44 9" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M4 39Q24 28 44 39" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
//       </svg> */}
//       <Svg x="0px" y="0px" viewBox="0 0 512.002 512.002" space="preserve" xmlns="http://www.w3.org/2000/svg">
//         <style>enable-background:new 0 0 512.002 512.002;</style>
//         <path d="M44 24V9H24H4V24V39H24" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 36L36 40L44 30" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9L24 24L44 9" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
//       </Svg>

//     </Social>
//   );
// };
export const Mail = () => {
  return (
    <Social href="mailto:your.email@example.com">
      <Svg
        x="0px"
        y="0px"
        viewBox="0 0 8 6" // Update viewBox based on the new SVG
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Email"
      >
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </Svg>
    </Social>
  );
};

export const Twitter = () => {
  return (
    <Social href="https://twitter.com/adamay_mann">
      <Svg x="0px" y="0px" viewBox="0 0 512.002 512.002" space="preserve">
        <style>enable-background:new 0 0 512.002 512.002;</style>
        <path d="M512.002,97.211c-18.84,8.354-39.082,14.001-60.33,16.54c21.686-13,38.342-33.585,46.186-58.115 c-20.299,12.039-42.777,20.78-66.705,25.49c-19.16-20.415-46.461-33.17-76.674-33.17c-58.011,0-105.042,47.029-105.042,105.039 c0,8.233,0.929,16.25,2.72,23.939c-87.3-4.382-164.701-46.2-216.509-109.753c-9.042,15.514-14.223,33.558-14.223,52.809 c0,36.444,18.544,68.596,46.73,87.433c-17.219-0.546-33.416-5.271-47.577-13.139c-0.01,0.438-0.01,0.878-0.01,1.321 c0,50.894,36.209,93.348,84.261,103c-8.813,2.399-18.094,3.687-27.674,3.687c-6.769,0-13.349-0.66-19.764-1.888 c13.368,41.73,52.16,72.104,98.126,72.949c-35.95,28.176-81.243,44.967-130.458,44.967c-8.479,0-16.84-0.496-25.058-1.471 c46.486,29.807,101.701,47.197,161.021,47.197c193.211,0,298.868-160.062,298.868-298.872c0-4.554-0.104-9.084-0.305-13.59 C480.111,136.775,497.92,118.275,512.002,97.211z" />
      </Svg>
    </Social>
  );
};

export const Github = () => {
  return (
    <Social href="https://github.com/mannadamay12">
      <Svg x="0px" y="0px" viewBox="0 0 438.549 438.549" space="preserve">
        <style>enable-background:new 0 0 438.549 438.549;</style>
        <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z" />
      </Svg>
    </Social>
  );
};

export const LinkedIn = () => {
  return (
    <Social href="https://www.linkedin.com/in/adamaymann7/">
      <Svg x="0px" y="0px" viewBox="0 0 430.117 430.117" space="preserve">
        <style>enable-background:new 0 0 430.117 430.117;</style>
        <path
          id="LinkedIn"
          d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707	c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"
        />
      </Svg>
    </Social>
  );
};

const Social = styled.a`
  opacity: 0.5;
  display: block;
  height: 100%;
  transition: opacity 0.1s ease-in-out;
`;

const Svg = styled.svg`
  height: 100%;
  fill: white;
`;
