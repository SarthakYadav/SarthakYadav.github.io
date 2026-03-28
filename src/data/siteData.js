export const profile = {
  name: 'Sarthak Yadav',
  role: 'Postdoctoral Researcher in Self-Supervised Audio and Speech Representation Learning',
  avatar: '/images/avatar_2.jpg',
  affiliations: [
    {
      label: 'Department of Electronic Systems, Aalborg University',
      url: 'https://www.es.aau.dk/',
    },
    {
      label: 'Pioneer Center for Artificial Intelligence, Copenhagen',
      url: 'https://di.ku.dk/ai-centre/',
    },
  ],
  about: [
    'I am currently working on how adaptation and integration of self-supervised audio representations for audio understanding in Large Audio Language Models. My recent work explores masked modeling, selective state spaces, and xLSTMs for robust general-purpose audio learning.',
    'I completed my PhD at ES-AAU and Pioneer Center for AI, and previously worked as a research intern with the Speech and Audio Processing Group at IDIAP. I hold an MSc(R) in Computing Science from the University of Glasgow.',
    'Before academia, I worked in industry as a Lead Research Engineer building mission-critical systems across computer vision, biometrics, speech, and language understanding.',
  ],
  links: [
    { label: 'Email', url: 'mailto:sarthak.yadav3@gmail.com' },
    {
      label: 'CV',
      url: 'https://drive.google.com/file/d/1jK4heGlJOVJX5P7eipTgK5kNjzjiyc0j/view?usp=sharing',
    },
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=cVsg9VsAAAAJ&hl=en',
    },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarthakyadav/' },
    { label: 'GitHub', url: 'https://github.com/SarthakYadav' },
    { label: 'Kaggle', url: 'https://www.kaggle.com/yadavsarthak' },
  ],
};

export const updates = [
  {
    date: '10/25',
    text: 'Started as a Postdoc at',
    links: [
      { label: 'ES-AAU', url: 'https://www.es.aau.dk/' },
      { label: 'Pioneer Center for AI', url: 'https://di.ku.dk/ai-centre/' },
    ],
  },
  {
    date: '09/25',
    text: 'Submitted my PhD thesis: "Learning Self-Supervised General Audio Representations from Masked Spectrograms".',
  },
  {
    date: '06/25',
    text: 'AudioMAE++ accepted at',
    links: [{ label: 'IEEE MLSP 2025', url: 'https://2025.ieeemlsp.org/en/' }],
  },
  {
    date: '05/25',
    text: 'Audio xLSTMs accepted at',
    links: [{ label: 'INTERSPEECH 2025', url: 'https://interspeech2025.org/home' }],
  },
  {
    date: '06/24',
    text: 'Audio Mamba accepted at',
    links: [{ label: 'INTERSPEECH 2024', url: 'https://interspeech2024.org/' }],
  },
  {
    date: '01/24',
    text: 'First PhD paper accepted at',
    links: [{ label: 'ICLR 2024', url: 'https://iclr.cc/' }],
  },
];

export const publications = [
  {
    title: 'AudioMAE++: learning better masked audio representations with SwiGLU FFNs',
    authors: 'Sarthak Yadav, Sergios Theodoridis, Zheng-Hua Tan',
    venue: 'IEEE MLSP',
    year: '2025',
    image: '/images/transformer_pp_block.png',
    imageFit: 'contain',
    imageAspect: '4 / 3',
    abstract:
      'AudioMAE++ modernizes masked audio autoencoders with macaron-style transformer blocks and gated linear units. Pretraining on AudioSet improves performance across ten downstream tasks and scales favorably against larger standard MAE baselines.',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2507.10464' },
      { label: 'Code', url: 'https://github.com/SarthakYadav/audiomae-plusplus-official' },
    ],
  },
  {
    title: 'Audio xLSTMs: Learning Self-Supervised Audio Representations with xLSTMs',
    authors: 'Sarthak Yadav, Sergios Theodoridis, Zheng-Hua Tan',
    venue: 'INTERSPEECH',
    year: '2025',
    image: '/images/axlstm_webpage.png',
    abstract:
      'AxLSTM evaluates xLSTMs for self-supervised masked spectrogram learning. On ten downstream tasks, pretrained models outperform comparable SSAST baselines with significantly fewer parameters.',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2408.16568' },
      { label: 'Code', url: 'https://github.com/SarthakYadav/axlstm-official' },
    ],
  },
  {
    title: 'Audio Mamba: Selective State Spaces for Self-Supervised Audio Representations',
    authors: 'Sarthak Yadav, Zheng-Hua Tan',
    venue: 'INTERSPEECH',
    year: '2024',
    image: '/images/ssam_webpage.png',
    abstract:
      'Audio Mamba studies selective state-space models for masked spectrogram pretraining. The approach consistently outperforms comparable transformer baselines across diverse audio recognition tasks.',
    links: [
      {
        label: 'Paper',
        url: 'https://www.isca-archive.org/interspeech_2024/yadav24_interspeech.html',
      },
      { label: 'Code', url: 'https://github.com/SarthakYadav/audio-mamba-official' },
    ],
  },
  {
    title: 'Masked Autoencoders with Multi-Window Local-Global Attention Are Better Audio Learners',
    authors: 'Sarthak Yadav, Sergios Theodoridis, Lars Kai Hansen, Zheng-Hua Tan',
    venue: 'ICLR',
    year: '2024',
    image: '/images/iclr-navbar-logo.svg',
    abstract:
      'MW-MAE introduces multi-window local-global attention to strengthen audio masked autoencoders. The model improves performance and scaling behavior, while learning richer attention patterns across windows.',
    links: [
      { label: 'Paper', url: 'https://openreview.net/pdf?id=Q53QLftNkA' },
      { label: 'Code', url: 'https://github.com/SarthakYadav/mwmae-jax-official' },
    ],
  },
  {
    title: 'Towards learning emotion information from short segments of speech',
    authors: 'Tilak Purohit, Sarthak Yadav, Bogdan Vlasenko, S. Pavankumar Dubagunta, Mathew Magimai Doss',
    venue: 'IEEE ICASSP',
    year: '2023',
    image: '/images/icassp2023.jpeg',
    abstract:
      'This work investigates short-segment speech emotion recognition (about 250-500ms) using both handcrafted and end-to-end methods, showing strong gains from raw waveform neural approaches.',
    links: [{ label: 'Paper', url: 'https://ieeexplore.ieee.org/document/10095892' }],
  },
  {
    title: 'Comparing Biosignal and Acoustic Feature Representation for Continuous Emotion Recognition',
    authors: 'Sarthak Yadav, Tilak Purohit, Zohreh Mostaani, Bogdan Vlasenko, Mathew Magimai Doss',
    venue: 'ACM Multimedia MuSe Workshop',
    year: '2022',
    image: '/images/MuSe2022.jpg',
    abstract:
      'The paper compares pre-trained neural embeddings and biosignal modeling for continuous valence-arousal prediction, demonstrating meaningful gains over challenge baselines.',
    links: [{ label: 'Paper', url: 'https://dl.acm.org/doi/abs/10.1145/3551876.3554812' }],
  },
  {
    title: 'Learning neural audio features without supervision',
    authors: 'Sarthak Yadav, Neil Zeghidour',
    venue: 'INTERSPEECH',
    year: '2022',
    image: '/images/pub_inter22_0_re.png',
    abstract:
      'This paper studies learnable audio frontends in self-supervised pretraining and shows major linear-probe gains versus fixed filterbanks on AudioSet-pretrained models.',
    links: [
      {
        label: 'Paper',
        url: 'https://www.isca-speech.org/archive/interspeech_2022/yadav22_interspeech.html',
      },
    ],
  },
  {
    title: 'Frequency and Temporal Convolutional Attention for Text-Independent Speaker Recognition',
    authors: 'Sarthak Yadav, Atul Rai',
    venue: 'IEEE ICASSP',
    year: '2020',
    image: '/images/pub_icassp20_0_re.jpg',
    abstract:
      'The work proposes convolutional attention modules tailored for spectrogram inputs to model temporal and frequency cues jointly, improving speaker verification performance on VoxCeleb.',
    links: [{ label: 'Paper', url: 'https://ieeexplore.ieee.org/document/9054440' }],
  },
  {
    title: 'Learning Discriminative Features for Speaker Identification and Verification',
    authors: 'Sarthak Yadav, Atul Rai',
    venue: 'INTERSPEECH',
    year: '2018',
    image: '/images/pub_inter18_0_re.jpg',
    abstract:
      'A VGG-style CNN with joint supervision improves both speaker identification and verification, reporting strong gains on VoxCeleb.',
    links: [
      {
        label: 'Paper',
        url: 'https://www.isca-speech.org/archive_v0/Interspeech_2018/pdfs/1015.pdf',
      },
    ],
  },
  {
    title: 'Prediction of Ubiquitination Sites Using UbiNets',
    authors: 'Sarthak Yadav, Manoj Kumar Gupta, Ankur Singh Bist',
    venue: 'Advances in Fuzzy Systems',
    year: '2018',
    image: '/images/pub_hind_0_re.jpg',
    abstract:
      'UbiNets explores densely connected neural architectures for ubiquitination site prediction and reports strong empirical performance in protein sequence modeling.',
    links: [
      {
        label: 'Paper',
        url: 'https://downloads.hindawi.com/journals/afs/2018/5125103.pdf',
      },
    ],
  },
];

export const projects = [
  {
    title: 'Community Contributor, SpeechBrain',
    description:
      'Contributed a PyTorch implementation of LEAF (Zeghidour et al., 2021), merged in SpeechBrain v0.5.12.',
    links: [
      { label: 'Code', url: 'https://github.com/speechbrain/speechbrain/pull/1364' },
      { label: 'Paper', url: 'https://openreview.net/forum?id=jM76BCb6F9m' },
    ],
  },
  {
    title: 'Masked Autoencoders in Jax',
    description:
      'Jax/Flax implementation of Masked Autoencoders Are Scalable Vision Learners with reproducible training support.',
    links: [
      { label: 'Code', url: 'https://github.com/SarthakYadav/jax-mae' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2111.06377' },
    ],
  },
  {
    title: 'audax: a home for audio ML in Jax',
    description:
      'Reference implementations for audio ML in Jax, including learnable frontends and self-supervised model recipes.',
    links: [{ label: 'Code', url: 'https://github.com/SarthakYadav/audax' }],
  },
  {
    title: 'Raw waveform modeling with LEAF frontend',
    description:
      'PyTorch implementation of LEAF with GPU and TPU training support, plus released pretrained checkpoints.',
    links: [
      { label: 'Code', url: 'https://github.com/SarthakYadav/leaf-pytorch' },
      { label: 'Paper', url: 'https://openreview.net/forum?id=jM76BCb6F9m' },
    ],
  },
  {
    title: 'Sound event recognition on FSD50K',
    description: 'PyTorch baseline and training pipeline for FSD50K sound event recognition tasks.',
    image: '/images/specs_wide2_re.jpg',
    links: [
      { label: 'Code', url: 'https://github.com/SarthakYadav/fsd50k-pytorch' },
      { label: 'Paper', url: 'https://arxiv.org/abs/2010.00475' },
    ],
  },
];
