// Skills Section Logos
import cssLogo from './assets/tech/css.png';
import javascriptLogo from './assets/tech/javascript.png';
import reactjsLogo from './assets/tech/reactjs.png';
import bootstrapLogo from './assets/tech/bootstrap.png';
import mongodbLogo from './assets/tech/mongodb.png';
import mysqlLogo from './assets/tech/mysql.png';
import postgreLogo from './assets/tech/postgre.png';
import RLogo from './assets/tech/R.svg';
import tableauLogo from './assets/tech/tableau.png';
import pytorchLogo from './assets/tech/pytorch.png';
import tensorflowLogo from './assets/tech/tensorflow.png';
import numpyLogo from './assets/tech/numpy.png';
import kerasLogo from './assets/tech/keras.png';
import vscodeLogo from './assets/tech/vscode.png';
import adobepremiereLogo from './assets/tech/adobepremiere.png';
import canvaLogo from './assets/tech/canva.png';
import figmaLogo from './assets/tech/figma.png';
import htmlLogo from './assets/tech/html.png'
import pythonLogo from './assets/tech/python.png';
import gitLogo from './assets/tech/github.png';
import tsLogo from './assets/tech/ts.png';
import matlabLogo from './assets/tech/matlab.png';

// Project Section Logo's
import deepresearch from './assets/work_logo/research.jpg';
import fakedata from './assets/work_logo/fakedata.png';
import gofish from './assets/work_logo/gofish.png';
import mlpmodel from './assets/work_logo/MLPModel.png';
import emotions from './assets/work_logo/emotions.jpg';
import mldimension from './assets/work_logo/ml-dimension.png';
import pocketballot from './assets/work_logo/pocketballot.png';
import DLforLowBandwidth from './pdfs/paper2.pdf';
import nba from './assets/work_logo/NBA.png';
import smartooth from './assets/work_logo/smarttooth.jpeg';
import leaf from './assets/work_logo/LeafLibrary.png';

export const SkillsInfo = [
  {
    title: 'App/Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo},
      { name: 'TS', logo: tsLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo }
    ],
  },
  {
    title: 'Data Science',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'R', logo: RLogo },
      { name: 'PostgresSQL', logo: postgreLogo },
      { name: 'MatLab', logo: matlabLogo },
      { name: 'Tableau', logo: tableauLogo },
      { name: 'PyTorch', logo: pytorchLogo },
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Keras', logo: kerasLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'VSCode', logo: vscodeLogo },
      { name: 'Canva', logo: canvaLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Adobe Premiere', logo: adobepremiereLogo }
    ],
  },
];


  export const projects = [
  {
    id: 0,
    title: "ML Classification of Children's Drawings",
    description:
      "Built a deep learning pipeline to classify children’s drawings by emotional category using CNNs and Random Forests. Explored the intersection of AI and psychology, achieving interpretable results for affective computing research.",
    image: emotions,
    tags: ["Python", "Machine Learning"],
    file: "https://github.com/sluggysadi/ECS-111-Emotion-Detection",
  },

  {
    id: 1,
    title: "Interpretable Machine Learning: Clustering & Dimensionality Reduction",
    description:
      "Applied PCA, t-SNE, and clustering methods with scikit-learn to uncover latent patterns in high-dimensional datasets. Emphasized interpretability with clear visualizations using Matplotlib and Pandas.",
    image: mldimension,
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
    file: "https://github.com/sluggysadi/interpretable-ml-dimension-reduction",
  },

  {
    id: 2,
    title: "SmartTooth",
    description:
      "A smart toothbrush integrating saliva biosensors and pressure-sensitive technology would track oral health, hydration, stress hormones, and glucose levels to detect early signs of systemic diseases, while an accompanying app visualizes this daily data to help users understand how their habits impact overall health. SmartTooth aims to revolutionize preventive healthcare by transforming a routine activity into a comprehensive health monitoring experience. Awarded 1st place for UCD Design Public Health Design in DES001.",
    image: smartooth,
    tags: ["UI/UX", "Design", "React"],
    file: "https://www.canva.com/design/DAG35qygies/rM-f0WRaKO0z072K8UswnQ/view",
  },

  {
    id: 3,
    title: "Leaf Library",
    description:
      "Applied exploratory data analysis (EDA) to survey responses using Excel to quantify user motivations, segment audiences, and identify key product drivers (price, sustainability, visuals). Designed a data-informed mobile app prototype for second-hand book trading; awarded Best User Research Award out of 70+ participants.",
    image: leaf,
    tags: ["UI/UX", "EDA", "Excel", "Design"],
    file: "https://www.canva.com/design/DAG3-Ezxn5g/07ln5EnrUwdn_oNHATkKwg/view?utm_content=DAG3-Ezxn5g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h25066e4e20,"
  },

  {
    id: 4,
    title: "NBA Injury Analysis",
    description:
      "Led exploratory data analysis with a team of 5 peers on 70+ years of NBA injury data using R (tidyverse, ggplot2), uncovering trends in injury frequency, seasonal patterns, and player/team risk factors.",
    image: nba,
    tags: ["R", "Data Visualization"],
    file: "https://github.com/sluggysadi/STA-141A-NBA-INJURIES.git",
  },

  {
    id: 5,
    title: "MLP Model",
    description:
      "Implemented and evaluated a multiple linear regression model in R to predict active physicians in 1990. Produced data visualizations with ggplot2 and conducted exploratory data analysis to validate findings.",
    image: mlpmodel,
    tags: ["R", "Data Visualization"],
    file: "http://rpubs.com/sadiafa/1336843",
  },

  {
    id: 6,
    title: "Deep Learning for Low Bandwidth Environments",
    description:
      "Researched and benchmarked SRGAN, ESRGAN, Transformer-based, and diffusion models to enhance image quality under low-bitrate conditions. Demonstrated that deep learning outperforms traditional upscaling, with potential for real-time content delivery in constrained environments.",
    image: deepresearch,
    tags: ["Artificial Intelligence", "Research"],
    file: DLforLowBandwidth,
  },

  {
    id: 7,
    title: "Fake Data Generator",
    description:
      "Developed a Streamlit app for generating customizable mock datasets using Pandas. Enables rapid prototyping and testing in data science workflows without compromising sensitive data.",
    image: fakedata,
    tags: ["Python", "Development", "Pandas", "Streamlit"],
    file: "https://github.com/sluggysadi/mock_data_producer",
  },

  {
    id: 8,
    title: "Pocket Ballot",
    description:
      "Designed a civic engagement app in React to simplify voting prep. Features a mock ballot, voter checklist, and location services, presented in a clean, mobile-first UI inspired by Figma prototypes.",
    image: pocketballot,
    tags: ["React", "Typescript", "Supabase", "TailwindCSS", "Mobile Development"],
    file: "https://github.com/sluggysadi/pocketballot",
  },

  {
    id: 9,
    title: "Go Fish",
    description:
      "Built an interactive Go Fish card game with Matlab, applying state management and event handling to create a smooth game loop and engaging UI.",
    image: gofish,
    tags: ["MatLab", "App Development"],
  },
];