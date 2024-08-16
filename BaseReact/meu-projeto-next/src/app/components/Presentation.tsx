// src/components/Presentation.tsx
export default function Presentation() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-3xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
                    Apresentação do Projeto
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Este é um trabalho acadêmico desenvolvido para a atividade de Deploy
                    Servidor Spring Boot, sob orientação do professor Márcio Augusto
                    Silva Bueno, na disciplina de Aplicações Orientadas a Serviço.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Aluno:</strong> Antônio Thiago Neto
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Curso:</strong> Sistemas para Internet
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Objetivo:</strong> Este projeto consiste na criação de uma
                    página web utilizando Next.js e sua integração com um backend
                    desenvolvido em Spring Boot.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>O que foi feito:</strong> A página demonstra o uso de
                    componentes React e a integração com o servidor backend, proporcionando
                    uma experiência completa de deploy de um aplicativo web full-stack.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Observação:</strong> Esta página serve como uma demonstração
                    acadêmica e pode ser expandida conforme a necessidade do projeto.
                </p>
            </div>
        </section>
    );
}
