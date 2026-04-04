import { Article, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'cloud', name: 'Cloud', color: '#003d82' },      // KERN Primary Blue
  { id: 'devtools', name: 'Dev Tools', color: '#0066b3' },
  { id: 'monitoring', name: 'Monitoring', color: '#0099cc' },
  { id: 'security', name: 'Security', color: '#33b3ff' },
  { id: 'storage', name: 'Storage', color: '#66ccff' },
  { id: 'networking', name: 'Networking', color: '#99ddff' },
  { id: 'ai', name: 'AI', color: '#cc66ff' },
];

export const ARTICLES: Article[] = [
  // Cloud (10 items)
  { id: '1', name: 'Kubernetes', category: 'cloud', description: 'Container orchestration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', tags: ['containerization'], featured: true },
  { id: '2', name: 'Docker', category: 'cloud', description: 'Container platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', tags: ['containerization'], featured: true },
  { id: '3', name: 'OpenStack', category: 'cloud', description: 'Open source cloud computing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openstack/openstack-plain.svg', tags: ['iaas'], featured: false },
  { id: '4', name: 'CloudFoundry', category: 'cloud', description: 'PaaS platform', tags: ['paas'], featured: false },
  { id: '5', name: 'Rancher', category: 'cloud', description: 'Kubernetes management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rancher/rancher-plain.svg', tags: ['containerization'], featured: false },
  { id: '6', name: 'Nomad', category: 'cloud', description: 'Workload orchestration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hashicorp/hashicorp-plain.svg', tags: ['orchestration'], featured: false },
  { id: '7', name: 'Terraform', category: 'cloud', description: 'Infrastructure as code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-plain.svg', tags: ['iac'], featured: true },
  { id: '8', name: 'Ansible', category: 'cloud', description: 'Configuration management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-plain.svg', tags: ['iac'], featured: false },
  { id: '9', name: 'Helm', category: 'cloud', description: 'Kubernetes package manager', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-plain.svg', tags: ['kubernetes'], featured: false },
  { id: '10', name: 'Linkerd', category: 'cloud', description: 'Service mesh', tags: ['servicemesh'], featured: false },

  // DevTools (10 items)
  { id: '11', name: 'Git', category: 'devtools', description: 'Version control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg', tags: ['vcs'], featured: true },
  { id: '12', name: 'GitLab', category: 'devtools', description: 'DevOps platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg', tags: ['cicd'], featured: true },
  { id: '13', name: 'Jenkins', category: 'devtools', description: 'Automation server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', tags: ['cicd'], featured: false },
  { id: '14', name: 'GitHub Actions', category: 'devtools', description: 'CI/CD workflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-plain.svg', tags: ['cicd'], featured: true },
  { id: '15', name: 'ArgoCD', category: 'devtools', description: 'GitOps for Kubernetes', tags: ['gitops'], featured: false },
  { id: '16', name: 'VS Code', category: 'devtools', description: 'Code editor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg', tags: ['editor'], featured: true },
  { id: '17', name: 'Gradle', category: 'devtools', description: 'Build tool', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg', tags: ['build'], featured: false },
  { id: '18', name: 'Maven', category: 'devtools', description: 'Build automation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-plain.svg', tags: ['build'], featured: false },
  { id: '19', name: 'npm', category: 'devtools', description: 'Package manager', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-plain.svg', tags: ['packagemgr'], featured: false },
  { id: '20', name: 'Yarn', category: 'devtools', description: 'Package manager', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-plain.svg', tags: ['packagemgr'], featured: false },

  // Monitoring (10 items)
  { id: '21', name: 'Prometheus', category: 'monitoring', description: 'Monitoring & alerting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-plain.svg', tags: ['monitoring'], featured: true },
  { id: '22', name: 'Grafana', category: 'monitoring', description: 'Visualization platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-plain.svg', tags: ['visualization'], featured: true },
  { id: '23', name: 'Datadog', category: 'monitoring', description: 'Monitoring platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-plain.svg', tags: ['monitoring'], featured: false },
  { id: '24', name: 'New Relic', category: 'monitoring', description: 'Application monitoring', tags: ['apm'], featured: false },
  { id: '25', name: 'Elastic', category: 'monitoring', description: 'Search & analytics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-plain.svg', tags: ['logging'], featured: true },
  { id: '26', name: 'Kibana', category: 'monitoring', description: 'Data visualization', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-plain.svg', tags: ['visualization'], featured: false },
  { id: '27', name: 'Logstash', category: 'monitoring', description: 'Log processing', tags: ['logging'], featured: false },
  { id: '28', name: 'Splunk', category: 'monitoring', description: 'Data analytics', tags: ['analytics'], featured: false },
  { id: '29', name: 'Jaeger', category: 'monitoring', description: 'Distributed tracing', tags: ['tracing'], featured: false },
  { id: '30', name: 'Zipkin', category: 'monitoring', description: 'Trace collector', tags: ['tracing'], featured: false },

  // Security (10 items)
  { id: '31', name: 'HashiCorp Vault', category: 'security', description: 'Secrets management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-plain.svg', tags: ['secrets'], featured: true },
  { id: '32', name: 'Keycloak', category: 'security', description: 'Identity & access', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keycloak/keycloak-plain.svg', tags: ['iam'], featured: false },
  { id: '33', name: 'OpenSSL', category: 'security', description: 'Cryptography library', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openssl/openssl-plain.svg', tags: ['crypto'], featured: false },
  { id: '34', name: 'Falco', category: 'security', description: 'Security monitoring', tags: ['runtime'], featured: false },
  { id: '35', name: 'Aqua Security', category: 'security', description: 'Container security', tags: ['containerization'], featured: false },
  { id: '36', name: 'Snyk', category: 'security', description: 'Vulnerability scanning', tags: ['scanning'], featured: false },
  { id: '37', name: 'OWASP', category: 'security', description: 'Security guidelines', tags: ['standards'], featured: false },
  { id: '38', name: 'CyberArk', category: 'security', description: 'Privileged access', tags: ['pam'], featured: false },
  { id: '39', name: 'Let\'s Encrypt', category: 'security', description: 'SSL certificates', tags: ['ssl'], featured: true },
  { id: '40', name: 'CoreDNS', category: 'security', description: 'DNS server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coredns/coredns-plain.svg', tags: ['dns'], featured: false },

  // Storage (10 items)
  { id: '41', name: 'PostgreSQL', category: 'storage', description: 'Relational database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', tags: ['database'], featured: true },
  { id: '42', name: 'MongoDB', category: 'storage', description: 'NoSQL database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg', tags: ['nosql'], featured: true },
  { id: '43', name: 'Redis', category: 'storage', description: 'In-memory store', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg', tags: ['cache'], featured: true },
  { id: '44', name: 'Cassandra', category: 'storage', description: 'Distributed database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-plain.svg', tags: ['database'], featured: false },
  { id: '45', name: 'Elasticsearch', category: 'storage', description: 'Search engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-plain.svg', tags: ['search'], featured: false },
  { id: '46', name: 'MinIO', category: 'storage', description: 'Object storage', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minio/minio-plain.svg', tags: ['s3'], featured: false },
  { id: '47', name: 'NATS', category: 'storage', description: 'Message broker', tags: ['messaging'], featured: false },
  { id: '48', name: 'RabbitMQ', category: 'storage', description: 'Message queue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-plain.svg', tags: ['messaging'], featured: false },
  { id: '49', name: 'Apache Kafka', category: 'storage', description: 'Event streaming', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-plain.svg', tags: ['streaming'], featured: true },
  { id: '50', name: 'Etcd', category: 'storage', description: 'Distributed key-value', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/etcd/etcd-plain.svg', tags: ['database'], featured: false },

  // Networking (10 items)
  { id: '51', name: 'Istio', category: 'networking', description: 'Service mesh', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/istio/istio-plain.svg', tags: ['servicemesh'], featured: true },
  { id: '52', name: 'Cilium', category: 'networking', description: 'eBPF networking', tags: ['ebpf'], featured: false },
  { id: '53', name: 'Calico', category: 'networking', description: 'Network policy', tags: ['networking'], featured: false },
  { id: '54', name: 'Flannel', category: 'networking', description: 'Network overlay', tags: ['networking'], featured: false },
  { id: '55', name: 'WireGuard', category: 'networking', description: 'VPN protocol', tags: ['vpn'], featured: false },
  { id: '56', name: 'OpenVPN', category: 'networking', description: 'VPN solution', tags: ['vpn'], featured: false },
  { id: '57', name: 'HAProxy', category: 'networking', description: 'Load balancer', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haproxy/haproxy-plain.svg', tags: ['loadbalancing'], featured: false },
  { id: '58', name: 'NGINX', category: 'networking', description: 'Web server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-plain.svg', tags: ['webserver'], featured: true },
  { id: '59', name: 'Envoy', category: 'networking', description: 'Proxy server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/envoy/envoy-plain.svg', tags: ['proxy'], featured: true },
  { id: '60', name: 'CoreDNS', category: 'networking', description: 'DNS server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coredns/coredns-plain.svg', tags: ['dns'], featured: false },

  // AI (10 items)
  { id: '61', name: 'TensorFlow', category: 'ai', description: 'Machine learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-plain.svg', tags: ['ml'], featured: true },
  { id: '62', name: 'PyTorch', category: 'ai', description: 'Deep learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-plain.svg', tags: ['deeplearning'], featured: true },
  { id: '63', name: 'Hugging Face', category: 'ai', description: 'NLP models', tags: ['nlp'], featured: false },
  { id: '64', name: 'Llama', category: 'ai', description: 'LLM framework', tags: ['llm'], featured: false },
  { id: '65', name: 'MLflow', category: 'ai', description: 'ML lifecycle', tags: ['mlops'], featured: false },
  { id: '66', name: 'Ray', category: 'ai', description: 'Distributed computing', tags: ['distributed'], featured: false },
  { id: '67', name: 'Kubeflow', category: 'ai', description: 'ML on Kubernetes', tags: ['ml'], featured: false },
  { id: '68', name: 'OpenAI Gym', category: 'ai', description: 'Reinforcement learning', tags: ['rl'], featured: false },
  { id: '69', name: 'Scikit-learn', category: 'ai', description: 'Machine learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-plain.svg', tags: ['ml'], featured: false },
  { id: '70', name: 'Weights & Biases', category: 'ai', description: 'ML experiment tracking', tags: ['mlops'], featured: false },
];
