document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir as abas
    window.openTab = function(evt, tabName) {
        var i, tabcontent, tabbuttons;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("active");
        }
        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].classList.remove("active");
        }
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
    }

    // ===========================================
    // Funcionalidades da Aba Subjetivo
    // ===========================================

    // Funcionalidade para Queixa Principal
    const chkCorrimento = document.getElementById('chkCorrimento');
    const txtCorrimentoDias = document.getElementById('txtCorrimentoDias');
    if (chkCorrimento) {
        chkCorrimento.addEventListener('change', function() {
            txtCorrimentoDias.classList.toggle('hidden', !this.checked);
        });
    }

    const chkSangramento = document.getElementById('chkSangramento');
    const txtSangramentoDias = document.getElementById('txtSangramentoDias');
    if (chkSangramento) {
        chkSangramento.addEventListener('change', function() {
            txtSangramentoDias.classList.toggle('hidden', !this.checked);
        });
    }

    const chkDorPelvica = document.getElementById('chkDorPelvica');
    const txtDorPelvicaDias = document.getElementById('txtDorPelvicaDias');
    if (chkDorPelvica) {
        chkDorPelvica.addEventListener('change', function() {
            txtDorPelvicaDias.classList.toggle('hidden', !this.checked);
        });
    }

    const chkOutrosQueixa = document.getElementById('chkOutrosQueixa');
    const txtOutrosQueixaDias = document.getElementById('txtOutrosQueixaDias');
    if (chkOutrosQueixa) {
        chkOutrosQueixa.addEventListener('change', function() {
            txtOutrosQueixaDias.classList.toggle('hidden', !this.checked);
        });
    }

    // Funcionalidade para Corrimento Vaginal (Sintomas)
    const chkCorrimentoSintoma = document.getElementById('chkCorrimentoSintoma');
    const selTipoCorrimento = document.getElementById('selTipoCorrimento');
    if (chkCorrimentoSintoma) {
        chkCorrimentoSintoma.addEventListener('change', function() {
            selTipoCorrimento.classList.toggle('hidden', !this.checked);
        });
    }

    // Funcionalidade para Histórico Sexual - Menarca
    const chkMenarca = document.getElementById('chkMenarca');
    const txtIdadeMenarca = document.getElementById('txtIdadeMenarca');
    if (chkMenarca) {
        chkMenarca.addEventListener('change', function() {
            txtIdadeMenarca.classList.toggle('hidden', !this.checked);
        });
    }

    // Funcionalidade para Histórico Sexual - Primeira Relação Sexual
    const chkPrimeiraRelacao = document.getElementById('chkPrimeiraRelacao');
    const txtIdadePrimeiraRelacao = document.getElementById('txtIdadePrimeiraRelacao');
    if (chkPrimeiraRelacao) {
        chkPrimeiraRelacao.addEventListener('change', function() {
            txtIdadePrimeiraRelacao.classList.toggle('hidden', !this.checked);
        });
    }

    // Funcionalidade para Tópico Menopausa
    const radMenopausaSim = document.getElementById('radMenopausaSim');
    const radMenopausaNao = document.getElementById('radMenopausaNao');
    const divUsaHormonio = document.getElementById('divUsaHormonio');

    if (radMenopausaSim) {
        radMenopausaSim.addEventListener('change', function() {
            divUsaHormonio.classList.toggle('hidden', !this.checked);
        });
    }
    if (radMenopausaNao) {
        radMenopausaNao.addEventListener('change', function() {
            divUsaHormonio.classList.add('hidden');
        });
    }

    // Funcionalidade para Atividade Sexual
    const radAtividadeSexualSim = document.getElementById('radAtividadeSexualSim');
    const radAtividadeSexualNao = document.getElementById('radAtividadeSexualNao');
    const divParceiroFixo = document.getElementById('divParceiroFixo');

    if (radAtividadeSexualSim) {
        radAtividadeSexualSim.addEventListener('change', function() {
            divParceiroFixo.classList.toggle('hidden', !this.checked);
        });
    }
    if (radAtividadeSexualNao) {
        radAtividadeSexualNao.addEventListener('change', function() {
            divParceiroFixo.classList.add('hidden');
            // Limpar campos de parceiro fixo se atividade sexual for 'não'
            document.getElementById('radParceiroFixoSim').checked = false;
            document.getElementById('radParceiroFixoNao').checked = true; // Define 'Não' como padrão
            document.getElementById('txtTempoParceiroFixo').classList.add('hidden');
            document.getElementById('txtTempoParceiroFixo').value = '';
        });
    }

    // Funcionalidade para Parceiro Fixo
    const radParceiroFixoSim = document.getElementById('radParceiroFixoSim');
    const radParceiroFixoNao = document.getElementById('radParceiroFixoNao');
    const txtTempoParceiroFixo = document.getElementById('txtTempoParceiroFixo');

    if (radParceiroFixoSim) {
        radParceiroFixoSim.addEventListener('change', function() {
            txtTempoParceiroFixo.classList.toggle('hidden', !this.checked);
        });
    }
    if (radParceiroFixoNao) {
        radParceiroFixoNao.addEventListener('change', function() {
            txtTempoParceiroFixo.classList.add('hidden');
            txtTempoParceiroFixo.value = ''; // Limpa o valor
        });
    }

    // ===========================================
    // Funcionalidades da Aba Objetivo
    // ===========================================

    // Exame das Mamas - Habilitar/Desabilitar campos
    const chkExameMamasRealizado = document.getElementById('chkExameMamasRealizado');
    const divExameMamas = document.getElementById('divExameMamas');
    if (chkExameMamasRealizado) {
        chkExameMamasRealizado.addEventListener('change', function() {
            divExameMamas.classList.toggle('hidden', !this.checked);
        });
    }

    // Exame das Mamas - Lesão/Úlcera
    const chkLesaoUlcera = document.getElementById('chkLesaoUlcera');
    const txtDetalheLesaoUlcera = document.getElementById('txtDetalheLesaoUlcera');
    if (chkLesaoUlcera) {
        chkLesaoUlcera.addEventListener('change', function() {
            txtDetalheLesaoUlcera.classList.toggle('hidden', !this.checked);
        });
    }

    // Alterações de Mamilo - Detalhar
    const achadoMamilo = document.getElementById('achadoMamilo');
    const txtDetalheMamilo = document.getElementById('txtDetalheMamilo');
    if (achadoMamilo) {
        achadoMamilo.addEventListener('change', function() {
            txtDetalheMamilo.classList.toggle('hidden', this.value !== 'outros');
        });
    }

    // Palpações de Mamas - Adicionar Nódulo
    const addNoduloBtn = document.getElementById('addNoduloBtn');
    const listaNodulosEncontrados = document.getElementById('listaNodulosEncontrados');
    let noduloCounter = 1;

    if (addNoduloBtn) {
        addNoduloBtn.addEventListener('click', function() {
            const mama = document.getElementById('noduloMama').value;
            const localizacao = document.getElementById('noduloLocalizacao').value;
            const tamanho = document.getElementById('noduloTamanho').value;
            const mobilidade = document.getElementById('noduloMobilidade').value;
            const consistencia = document.getElementById('noduloConsistencia').value;
            const doloroso = document.getElementById('noduloDoloroso').value;

            if (!mama || !localizacao || !tamanho || !mobilidade || !consistencia || !doloroso) {
                alert('Por favor, preencha todos os campos do nódulo.');
                return;
            }

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                N${noduloCounter++}: Mama: ${mama} | Localização: ${localizacao.toUpperCase()} | Tamanho: ${tamanho} cm | Mobilidade: ${mobilidade} | Consistência: ${consistencia} | Doloroso: ${doloroso === 'sim' ? 'Sim' : 'Não'}
                <button type="button" class="remove-nodulo-btn">Remover</button>
            `;
            listaNodulosEncontrados.appendChild(listItem);

            // Adicionar evento para remover o nódulo
            listItem.querySelector('.remove-nodulo-btn').addEventListener('click', function() {
                listItem.remove();
            });

            // Limpar campos
            document.getElementById('noduloMama').value = '';
            document.getElementById('noduloLocalizacao').value = '';
            document.getElementById('noduloTamanho').value = '';
            document.getElementById('noduloMobilidade').value = '';
            document.getElementById('noduloConsistencia').value = '';
            document.getElementById('noduloDoloroso').value = '';
        });
    }

    // Coleta - Habilitar/Desabilitar campos
    const chkColetaRealizada = document.getElementById('chkColetaRealizada');
    const divMotivoColetaNaoRealizada = document.getElementById('divMotivoColetaNaoRealizada');
    const divDetalhesColeta = document.getElementById('divDetalhesColeta');

    if (chkColetaRealizada) {
        chkColetaRealizada.addEventListener('change', function() {
            divDetalhesColeta.classList.toggle('hidden', !this.checked);
            divMotivoColetaNaoRealizada.classList.toggle('hidden', this.checked);
        });
    }

    // Coleta - Mostrar imagem do útero
    window.showUteroImage = function() {
        const uteroImageContainer = document.getElementById('uteroImageContainer');
        uteroImageContainer.classList.toggle('hidden');
    }

    // ===========================================
    // Gerar Relatório
    // ===========================================
    const gerarRelatorioBtn = document.getElementById('gerarRelatorio');
    if (gerarRelatorioBtn) {
        gerarRelatorioBtn.addEventListener('click', function() {
            const formSubjetivo = document.getElementById('formSubjetivo');
            const formObjetivo = document.getElementById('formObjetivo');
            let relatorio = "";

            // Coleta dados da aba Subjetivo
            relatorio += "--- SUBJETIVO ---\n\n";
            // Queixa Principal
            relatorio += "Queixa Principal:\n";
            const queixaPrincipalChecks = formSubjetivo.querySelectorAll('input[name="queixaPrincipal"]:checked');
            if (queixaPrincipalChecks.length === 0) {
                relatorio += "- Nenhuma selecionada\n";
            } else {
                queixaPrincipalChecks.forEach(checkbox => {
                    relatorio += `- ${checkbox.value}`;
                    const txtCorrimentoDias = document.getElementById('txtCorrimentoDias');
                    const txtSangramentoDias = document.getElementById('txtSangramentoDias');
                    const txtDorPelvicaDias = document.getElementById('txtDorPelvicaDias');
                    const txtOutrosQueixaDias = document.getElementById('txtOutrosQueixaDias');

                    if (checkbox.id === 'chkCorrimento' && txtCorrimentoDias && txtCorrimentoDias.value) {
                        relatorio += ` (${txtCorrimentoDias.value})`;
                    } else if (checkbox.id === 'chkSangramento' && txtSangramentoDias && txtSangramentoDias.value) {
                        relatorio += ` (${txtSangramentoDias.value})`;
                    } else if (checkbox.id === 'chkDorPelvica' && txtDorPelvicaDias && txtDorPelvicaDias.value) {
                        relatorio += ` (${txtDorPelvicaDias.value})`;
                    } else if (checkbox.id === 'chkOutrosQueixa' && txtOutrosQueixaDias && txtOutrosQueixaDias.value) {
                        relatorio += ` (${txtOutrosQueixaDias.value})`;
                    }
                    relatorio += "\n";
                });
            }
            relatorio += "\n";

            // Sintomas
            relatorio += "Sintomas:\n";
            const sintomasChecks = formSubjetivo.querySelectorAll('input[name="sintomas"]:checked');
            const selTipoCorrimento = document.getElementById('selTipoCorrimento');
            if (sintomasChecks.length === 0) {
                relatorio += "- Nenhuma selecionada\n";
            } else {
                sintomasChecks.forEach(checkbox => {
                    relatorio += `- ${checkbox.value}`;
                    if (checkbox.id === 'chkCorrimentoSintoma' && selTipoCorrimento && selTipoCorrimento.value) {
                        relatorio += ` (${selTipoCorrimento.options[selTipoCorrimento.selectedIndex].text})`;
                    }
                    relatorio += "\n";
                });
            }
            relatorio += "\n";

            // Sintomas Mamários
            relatorio += "Sintomas Mamários:\n";
            const sintomasMamariosChecks = formSubjetivo.querySelectorAll('input[name="sintomasMamarios"]:checked');
            if (sintomasMamariosChecks.length === 0) {
                relatorio += "- Nenhuma selecionada\n";
            } else {
                sintomasMamariosChecks.forEach(checkbox => {
                    relatorio += `- ${checkbox.value}\n`;
                });
            }
            relatorio += "\n";

            // Histórico Sexual
            relatorio += "Histórico Sexual:\n";
            const chkMenarca = document.getElementById('chkMenarca');
            const txtIdadeMenarca = document.getElementById('txtIdadeMenarca');
            const chkPrimeiraRelacao = document.getElementById('chkPrimeiraRelacao');
            const txtIdadePrimeiraRelacao = document.getElementById('txtIdadePrimeiraRelacao');
            const radMenopausaSim = document.getElementById('radMenopausaSim');
            const radMenopausaNao = document.getElementById('radMenopausaNao');

            if (chkMenarca && chkMenarca.checked) {
                relatorio += `- Menarca: ${txtIdadeMenarca.value} anos\n`;
            }
            if (chkPrimeiraRelacao && chkPrimeiraRelacao.checked) {
                relatorio += `- Primeira Relação Sexual: ${txtIdadePrimeiraRelacao.value} anos\n`;
            }
            if (radMenopausaSim && radMenopausaSim.checked) {
                relatorio += `- Menopausa: Sim\n`;
                const usaHormonioRadio = formSubjetivo.querySelector('input[name="usaHormonio"]:checked');
                if (usaHormonioRadio) {
                    relatorio += `  - Usa Hormônio: ${usaHormonioRadio.value === 'sim' ? 'Sim' : 'Não'}\n`;
                }
            } else if (radMenopausaNao && radMenopausaNao.checked) {
                relatorio += `- Menopausa: Não\n`;
            }
            relatorio += "\n";

            // Atividade Sexual
            relatorio += "Atividade Sexual:\n";
            const radAtividadeSexualSim = document.getElementById('radAtividadeSexualSim');
            const radAtividadeSexualNao = document.getElementById('radAtividadeSexualNao');
            const radParceiroFixoSim = document.getElementById('radParceiroFixoSim');
            const radParceiroFixoNao = document.getElementById('radParceiroFixoNao');
            const txtTempoParceiroFixo = document.getElementById('txtTempoParceiroFixo');

            if (radAtividadeSexualSim && radAtividadeSexualSim.checked) {
                relatorio += `- Atividade Sexual: Sim\n`;
                if (radParceiroFixoSim && radParceiroFixoSim.checked) {
                    relatorio += `  - Parceiro Fixo: Sim (${txtTempoParceiroFixo.value})\n`;
                } else if (radParceiroFixoNao && radParceiroFixoNao.checked) {
                    relatorio += `  - Parceiro Fixo: Não\n`;
                }
            } else if (radAtividadeSexualNao && radAtividadeSexualNao.checked) {
                relatorio += `- Atividade Sexual: Não\n`;
            }
            relatorio += "\n";

            // Histórico Reprodutivo
            relatorio += "Histórico Reprodutivo:\n";
            const gesta = formSubjetivo.querySelector('input[name="gesta"]').value;
            const para = formSubjetivo.querySelector('input[name="para"]').value;
            const aborto = formSubjetivo.querySelector('input[name="aborto"]').value;
            relatorio += `- G(${gesta || ''}) P(${para || ''}) A(${aborto || ''})\n\n`;

            // Histórico de Coleta (Subjetivo)
            relatorio += "Histórico de Coleta (Subjetivo):\n";
            relatorio += `- Última Coleta: ${formSubjetivo.querySelector('input[name="tempoUltimaColeta"]').value || 'Não informado'}\n\n`;

            // ISTs Prévias
            relatorio += "ISTs Prévias:\n";
            const istsPreviasChecks = formSubjetivo.querySelectorAll('input[name="istsPrevias"]:checked');
            if (istsPreviasChecks.length === 0) {
                relatorio += "- Nenhuma selecionada\n";
            } else {
                istsPreviasChecks.forEach(checkbox => {
                    relatorio += `- ${checkbox.value}\n`;
                });
            }
            relatorio += "\n";

            // Contracepção
            relatorio += "Contracepção:\n";
            const contracepcaoChecks = formSubjetivo.querySelectorAll('input[name="contracepcao"]:checked');
            if (contracepcaoChecks.length === 0) {
                relatorio += "- Nenhuma selecionada\n";
            } else {
                contracepcaoChecks.forEach(checkbox => {
                    relatorio += `- ${checkbox.value}\n`;
                });
            }
            relatorio += "\n";

            // Antecedentes Pessoais
            relatorio += "Antecedentes Pessoais:\n";
            const vacinacaoEmDiaRadio = formSubjetivo.querySelector('input[name="vacinacaoEmDia"]:checked');
            if (vacinacaoEmDiaRadio) {
                relatorio += `- Vacinação em dia: ${vacinacaoEmDiaRadio.value === 'sim' ? 'Sim' : 'Não'}\n`;
            } else {
                relatorio += `- Vacinação em dia: Não informado\n`;
            }
            const antecedentesPessoaisChecks = formSubjetivo.querySelectorAll('input[name="antecedentesPessoais"]:checked');
            if (antecedentesPessoaisChecks.length > 0) {
                antecedentesPessoaisChecks.forEach(checkbox => {
                    relatorio += `- ${checkbox.value}\n`;
                });
            }
            const cancerColoMamaPessoalRadio = formSubjetivo.querySelector('input[name="cancerColoMamaPessoal"]:checked');
            if (cancerColoMamaPessoalRadio) {
                relatorio += `- Câncer de colo ou mama (Pessoal): ${cancerColoMamaPessoalRadio.value === 'sim' ? 'Sim' : 'Não'}\n`;
            } else {
                relatorio += `- Câncer de colo ou mama (Pessoal): Não informado\n`;
            }
            relatorio += "\n";

            // Histórico Familiar
            relatorio += "Histórico Familiar:\n";
            const diabetesFamiliarRadio = formSubjetivo.querySelector('input[name="diabetesFamiliar"]:checked');
            if (diabetesFamiliarRadio) {
                relatorio += `- Diabetes (Familiar): ${diabetesFamiliarRadio.value === 'sim' ? 'Sim' : 'Não'}\n`;
            } else {
                relatorio += `- Diabetes (Familiar): Não informado\n`;
            }
            const hipertensaoFamiliarRadio = formSubjetivo.querySelector('input[name="hipertensaoFamiliar"]:checked');
            if (hipertensaoFamiliarRadio) {
                relatorio += `- Hipertensão (Familiar): ${hipertensaoFamiliarRadio.value === 'sim' ? 'Sim' : 'Não'}\n`;
            } else {
                relatorio += `- Hipertensão (Familiar): Não informado\n`;
            }
            const cancerColoMamaFamiliarRadio = formSubjetivo.querySelector('input[name="cancerColoMamaFamiliar"]:checked');
            if (cancerColoMamaFamiliarRadio) {
                relatorio += `- Câncer de colo ou mama (Familiar): ${cancerColoMamaFamiliarRadio.value === 'sim' ? 'Sim' : 'Não'}\n`;
            } else {
                relatorio += `- Câncer de colo ou mama (Familiar): Não informado\n`;
            }
            relatorio += "\n";

            // Medicações em Uso
            relatorio += "Medicações em Uso:\n";
            relatorio += `- ${formSubjetivo.querySelector('textarea[name="medicacoesEmUso"]').value || 'Nenhuma'}\n\n`;


            // Coleta dados da aba Objetivo
            relatorio += "--- OBJETIVO ---\n\n";

            const chkExameMamasRealizado = document.getElementById('chkExameMamasRealizado');

            // Exame das Mamas, Alterações de Mamilo, Palpações de Mamas e Observações Adicionais
            // Serão incluídos APENAS se o exame das mamas foi realizado
            if (chkExameMamasRealizado && chkExameMamasRealizado.checked) {
                relatorio += "Exame das Mamas:\n";
                relatorio += `- Realizado: Sim\n`;
                relatorio += `  - Simetria de Mamas: ${document.getElementById('simetriaMamas').value || 'Não selecionado'}\n`;
                relatorio += `  - Alterações de Pele:\n`;
                const txtDetalheLesaoUlcera = document.getElementById('txtDetalheLesaoUlcera');
                const alteracoesPeleChecks = formObjetivo.querySelectorAll('input[name="alteracoesPele"]:checked');
                if (alteracoesPeleChecks.length === 0) {
                    relatorio += `    - Nenhuma selecionada\n`;
                } else {
                    alteracoesPeleChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}`;
                        if (checkbox.id === 'chkLesaoUlcera' && txtDetalheLesaoUlcera && txtDetalheLesaoUlcera.value) {
                            relatorio += ` (${txtDetalheLesaoUlcera.value})`;
                        }
                        relatorio += "\n";
                    });
                }
                relatorio += "\n";

                // Alterações de Mamilo
                relatorio += "Alterações de Mamilo:\n";
                const achadoMamilo = document.getElementById('achadoMamilo');
                const txtDetalheMamilo = document.getElementById('txtDetalheMamilo');
                const achadoMamiloValue = achadoMamilo ? achadoMamilo.value : '';
                if (achadoMamiloValue) {
                    relatorio += `- Achado: ${achadoMamilo.options[achadoMamilo.selectedIndex].text}`;
                    if (achadoMamiloValue === 'outros' && txtDetalheMamilo && txtDetalheMamilo.value) {
                        relatorio += ` (${txtDetalheMamilo.value})`;
                    }
                    relatorio += "\n";
                } else {
                    relatorio += `- Não informado\n`;
                }
                relatorio += "\n";

                // Palpações de Mamas - Nódulos
                relatorio += "Palpações de Mamas (Nódulos Encontrados):\n";
                const listaNodulosEncontrados = document.getElementById('listaNodulosEncontrados');
                const nodulosListItems = listaNodulosEncontrados ? listaNodulosEncontrados.querySelectorAll('li') : [];
                if (nodulosListItems.length === 0) {
                    relatorio += `- Nenhum nódulo registrado\n`;
                } else {
                    nodulosListItems.forEach(item => {
                        let noduleText = item.textContent.replace('Remover', '').trim();
                        relatorio += `- ${noduleText}\n`;
                    });
                }
                relatorio += "\n";

                // Observações Adicionais
                relatorio += "Observações Adicionais:\n";
                relatorio += `- ${formObjetivo.querySelector('textarea[name="observacoesAdicionais"]').value || 'Nenhuma'}\n\n`;

            } else {
                relatorio += "Exame das Mamas não realizados.\n\n";
            }

            // Coleta
            relatorio += "Coleta (Exame de Colo Uterino):\n";
            const chkColetaRealizada = document.getElementById('chkColetaRealizada');

            if (chkColetaRealizada && chkColetaRealizada.checked) {
                relatorio += `- Realizada: Sim\n`;
                relatorio += `  - Condições do Colo Uterino: ${document.getElementById('condicoesColoUterino').value || 'Não selecionado'}\n`;
                
                relatorio += `  - Aspectos do Colo Uterino:\n`;
                const visualizacaoColoChecks = formObjetivo.querySelectorAll('input[name="visualizacaoColo"]:checked');
                if (visualizacaoColoChecks.length > 0) {
                    visualizacaoColoChecks.forEach(checkbox => {
                        relatorio += `    - Visualização: ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Visualização: Não informado\n`;
                }
                relatorio += `    - Posição: ${document.getElementById('posicaoColo').value || 'Não selecionado'}\n`;

                relatorio += `  - Secreção:\n`;
                const secrecaoColoChecks = formObjetivo.querySelectorAll('input[name="secrecaoColo"]:checked');
                if (secrecaoColoChecks.length > 0) {
                    secrecaoColoChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Ausente\n`;
                }

                relatorio += `  - Corrimento:\n`;
                const corrimentoVaginoseChecks = formObjetivo.querySelectorAll('input[name="corrimentoVaginose"]:checked');
                if (corrimentoVaginoseChecks.length > 0) {
                    corrimentoVaginoseChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Nenhuma selecionada\n`;
                }

                relatorio += `  - Odor:\n`;
                const odorColoChecks = formObjetivo.querySelectorAll('input[name="odorColo"]:checked');
                if (odorColoChecks.length > 0) {
                    odorColoChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Não informado\n`;
                }

                relatorio += `  - Cor do Colo:\n`;
                const corColoChecks = formObjetivo.querySelectorAll('input[name="corColo"]:checked');
                if (corColoChecks.length > 0) {
                    corColoChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Não informado\n`;
                }

                relatorio += `  - Paredes:\n`;
                const paredesColoChecks = formObjetivo.querySelectorAll('input[name="paredesColo"]:checked');
                if (paredesColoChecks.length > 0) {
                    paredesColoChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Não informado\n`;
                }

                relatorio += `  - Sangramento:\n`;
                const sangramentoColetaChecks = formObjetivo.querySelectorAll('input[name="sangramentoColeta"]:checked');
                if (sangramentoColetaChecks.length > 0) {
                    sangramentoColetaChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Não informado\n`;
                }

                relatorio += `  - Condições da Paciente:\n`;
                const condicoesPacienteChecks = formObjetivo.querySelectorAll('input[name="condicoesPaciente"]:checked');
                if (condicoesPacienteChecks.length > 0) {
                    condicoesPacienteChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Não informado\n`;
                }

                relatorio += `  - Tipo de Material Coletado:\n`;
                const tipoMaterialColetadoChecks = formObjetivo.querySelectorAll('input[name="tipoMaterialColetado"]:checked');
                if (tipoMaterialColetadoChecks.length > 0) {
                    tipoMaterialColetadoChecks.forEach(checkbox => {
                        relatorio += `    - ${checkbox.value}\n`;
                    });
                } else {
                    relatorio += `    - Não informado\n`;
                }

            } else {
                relatorio += `- Realizada: Não\n`;
                relatorio += `  - Motivo: ${formObjetivo.querySelector('input[name="motivoColetaNaoRealizada"]').value || 'Não especificado'}\n`;
            }
            relatorio += "\n";


            document.getElementById('relatorioGerado').innerText = relatorio;
        });
    }

    // ===========================================
    // NOVO CÓDIGO: Resetar formulários ao carregar a página
    // ===========================================
    const formSubjetivo = document.getElementById('formSubjetivo');
    const formObjetivo = document.getElementById('formObjetivo');

    if (formSubjetivo) {
        formSubjetivo.reset();
        // Além do reset padrão, para checkboxes e selects que controlam visibilidade,
        // precisamos garantir que os campos ocultos permaneçam ocultos após o reset
        // e que as selects voltem para o valor padrão se não for o primeiro.
        // Isso é importante porque .reset() apenas retorna ao estado inicial do HTML.

        // Reaplicar as lógicas de visibilidade iniciais para a aba Subjetivo:
        document.getElementById('txtCorrimentoDias').classList.add('hidden');
        document.getElementById('txtSangramentoDias').classList.add('hidden');
        document.getElementById('txtDorPelvicaDias').classList.add('hidden');
        document.getElementById('txtOutrosQueixaDias').classList.add('hidden');
        document.getElementById('selTipoCorrimento').classList.add('hidden');
        document.getElementById('txtIdadeMenarca').classList.add('hidden');
        document.getElementById('txtIdadePrimeiraRelacao').classList.add('hidden');
        document.getElementById('divUsaHormonio').classList.add('hidden');
        document.getElementById('divParceiroFixo').classList.add('hidden');
        document.getElementById('txtTempoParceiroFixo').classList.add('hidden');
    }

    if (formObjetivo) {
        formObjetivo.reset();
        // Reaplicar as lógicas de visibilidade iniciais para a aba Objetivo:
        document.getElementById('divExameMamas').classList.add('hidden');
        document.getElementById('txtDetalheLesaoUlcera').classList.add('hidden');
        document.getElementById('txtDetalheMamilo').classList.add('hidden');
        document.getElementById('divMotivoColetaNaoRealizada').classList.add('hidden');
        document.getElementById('divDetalhesColeta').classList.add('hidden');
        document.getElementById('uteroImageContainer').classList.add('hidden');

        // Limpar a lista de nódulos (que não é resetada pelo form.reset())
        const listaNodulosEncontrados = document.getElementById('listaNodulosEncontrados');
        if (listaNodulosEncontrados) {
            listaNodulosEncontrados.innerHTML = ''; // Limpa todos os itens da lista
        }
        noduloCounter = 1; // Reinicia o contador de nódulos
    }

    // Opcional: Ativar a primeira aba por padrão ao carregar a página
    // Isso é útil para que a página não fique vazia inicialmente.
    // Certifique-se de que o botão 'tabSubjetivo' tenha o evento 'click' para 'openTab' no HTML.
    // Pode ser necessário ajustar a ID ou classe do botão se for diferente.
    const defaultTabButton = document.querySelector('.tab-button'); // Assume que o primeiro botão de aba é o padrão
    if (defaultTabButton) {
        defaultTabButton.click();
    }
});