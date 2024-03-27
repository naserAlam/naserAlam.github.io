import DotNetImg from '../../assets/DotNet.svg'
import BootstrapImg from '../../assets/Bootstrap.svg'
import FlaskImg from '../../assets/Flask-Dark.svg'
import PyTorchImg from '../../assets/PyTorch-Dark.svg'
import ReactImg from '../../assets/React-Dark.svg'
import ScikitLearnImg from '../../assets/ScikitLearn-Dark.svg'
import TailwindImg from '../../assets/TailwindCSS-Dark.svg'
import TensorFlowImg from '../../assets/TensorFlow-Dark.svg'

export const SKILLS_LIST = [
    DotNetImg, ReactImg, FlaskImg, TailwindImg, BootstrapImg, ScikitLearnImg, PyTorchImg, TensorFlowImg
]

export const SKILLS = {
    webdevelopment: [DotNetImg, ReactImg, FlaskImg, TailwindImg, BootstrapImg],
    machinelearning: [ScikitLearnImg, PyTorchImg, TensorFlowImg]
}

export const SKILL_TYPES = [
    {
        key: 'webdevelopment',
        title: 'Web Development'
    },
    {
        key: 'machinelearning',
        title: 'Machine Learning'
    }
]