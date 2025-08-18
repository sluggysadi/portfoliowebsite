// Skills Section Logos
import cssLogo from './assets/tech/css.png';
import javascriptLogo from './assets/tech/javascript.png';
import reactjsLogo from './assets/tech/reactjs.png';
import tailwindcssLogo from './assets/tech/tailwindcss.png';
import materialuiLogo from './assets/tech/materialui.png';
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
import myucdapp from './assets/work_logo/myucdapp.jpg';
import deepresearch from './assets/work_logo/research.png';
import fakedata from './assets/work_logo/fakedata.png';
import gofish from './assets/work_logo/gofish.png';
import mlpmodel from './assets/work_logo/MLPmodel.png';
import emotions from './assets/work_logo/emotions.png';
import mldimension from './assets/work_logo/ml-dimension.png';
import pocketballot from './assets/work_logo/pocketballot.png';
import DLforLowBandwidth from '/public/pdfs/paper2.pdf';
import comiccrafter from './assets/work_logo/comiccrafter.png';

export const SkillsInfo = [
  {
    title: 'App/Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo},
      { name: 'TS', logo: tsLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'TailwindCSS', logo: tailwindcssLogo },
      { name: 'MaterialUI', logo: materialuiLogo },
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
      title: "Deep Learning for Low Bandwidth Environments",
      description:
        "Researched and benchmarked SRGAN, ESRGAN, Transformer-based, and diffusion models to enhance image quality under low-bitrate conditions. Demonstrated that deep learning outperforms traditional upscaling, with potential for real-time content delivery in constrained environments.",
      image: deepresearch,
      tags: ["Artificial Intelligence", "Research"],
      file: DLforLowBandwidth
    },
    {
      id: 1,
      title: "My UCD App",
      description:
        "Designed and built a responsive React UI for MYUCD’s mobile app to streamline access to campus resources. Delivered Figma-to-code implementation with a strong focus on usability and student experience.",
      image: myucdapp,
      tags: ["UI/UX", "Design", "React"],
      file: "https://www.figma.com/design/9W5dbeuGND0Ju0j85BWXn3/MYDAVIS-APP?node-id=0-1&t=iB7hEK8ZiCtGLIkF-1",
    },
    {
      id: 2,
      title: "Fake Data Generator",
      description:
        "Developed a Streamlit app for generating customizable mock datasets using Pandas. Enables rapid prototyping and testing in data science workflows without compromising sensitive data.",
      image: fakedata,
      tags: ["Python", "Development", "Pandas", "Streamlit"],
      file: "https://github.com/sluggysadi/mock_data_producer",
    },
  
    {
      id: 3,
      title: "MLP Model",
      description:
        "Implemented and evaluated a multiple linear regression model in R to predict active physicians in 1990. Produced visual insights with ggplot2 and conducted exploratory data analysis to validate findings.",
      image: mlpmodel,
      tags: ["R", "Data Visualization"],
      file: "http://rpubs.com/sadiafa/1336843",
    },
    {
      id: 4,
      title: "ML Classification of Children's Drawings",
      description:
        "Built a deep learning pipeline to classify children’s drawings by emotional category using CNNs and Random Forests. Explored the intersection of AI and psychology, achieving interpretable results for affective computing research.",
      image: emotions,
      tags: ["Python", "Machine Learning"],
      file: "https://github.com/sluggysadi/ECS-111-Emotion-Detection",
    },
    {
      id: 5,
      title: "Interpretable Machine Learning: Clustering & Dimensionality Reduction",
      description:
        "Applied PCA, t-SNE, and clustering methods with scikit-learn to uncover latent patterns in high-dimensional datasets. Emphasized interpretability with clear visualizations using Matplotlib and Pandas.",
      image: mldimension,
      tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
      file: "https://github.com/sluggysadi/interpretable-ml-dimension-reduction",
    },
    {
      id: 6,
      title: "Pocket Ballot",
      description:
        "Designed a civic engagement app in React to simplify voting prep. Features a mock ballot, voter checklist, and location services, presented in a clean, mobile-first UI inspired by Figma prototypes.",
      image: pocketballot,
      tags: ["React", "Typescript", "Supabase", "TailwindCSS", "Mobile Development"],
      file: "https://github.com/sluggysadi/pocketballot",
    },
    {
      id: 7,
      title: "Go Fish",
      description:
        "Built an interactive Go Fish card game with Matlab, applying state management and event handling to create a smooth game loop and engaging UI.",
      image: gofish,
      tags: ["MatLab", "App Development"],
    },
    {
      id: 8,
      title: "Comic Crafter",
      description:
        "The AI Comic Strip Generator leverages generative AI to transform user prompts into dynamic, 90s-inspired superhero comic panels. Built with a modern frontend architecture, it delivers fast, interactive, and visually immersive storytelling experiences.",
      image: comiccrafter,
      tags: ["React", "TypeScript", "DALL·E", "GPT-3", "App Development", "Supabase"],
      file: "https://github.com/sluggysadi/comic-crafter",
    }
  ];