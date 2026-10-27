# agendamento-agua-quente

## Descrição do Problema
Uma clínica de estética precisa saber qual cliente pode usar o chuveiro a cada 10 minutos. O sistema recebe o horário da última limpeza e o nome do cliente, e decide se a água está liberada.

## Requisitos
- Verificar se pelo menos 10 minutos se passaram desde a última limpeza
- Se estiver dentro da janela de espera, retornar mensagem de bloqueio
- Se estiver liberado, retornar o horário sugerido

## Exemplo de Uso
Entrada: ultimaLimpeza "08:00", cliente "Ana"

Saída:
[Ana] pode usar o chuveiro às 08:10