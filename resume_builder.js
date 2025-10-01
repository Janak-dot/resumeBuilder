        let skills = [];
        let languages = [];
        let experiences = [];
        let education = [];
        let references = [];
        let customSections = [];
        let profilePicData = null;

        // Section ordering - controls the display order in each column
        let sectionOrder = {
            left: ['contact', 'skills', 'languages', 'references'],
            right: ['summary', 'experience', 'education']
        };

        function moveSectionOrder(sectionKey, column, direction) {
            const arr = sectionOrder[column];
            const idx = arr.indexOf(sectionKey);
            
            if (direction === 'up' && idx > 0) {
                [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
            } else if (direction === 'down' && idx < arr.length - 1) {
                [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
            }
            
            updatePreview();
        }

        function addSkill() {
            const id = Date.now();
            skills.push({ id, category: '', items: '', order: skills.length });
            renderSkills();
        }

        function removeSkill(id) {
            skills = skills.filter(s => s.id !== id);
            skills.forEach((s, idx) => s.order = idx);
            renderSkills();
            updatePreview();
        }

        function moveSkill(id, direction) {
            const idx = skills.findIndex(s => s.id === id);
            if (direction === 'up' && idx > 0) {
                [skills[idx], skills[idx - 1]] = [skills[idx - 1], skills[idx]];
            } else if (direction === 'down' && idx < skills.length - 1) {
                [skills[idx], skills[idx + 1]] = [skills[idx + 1], skills[idx]];
            }
            skills.forEach((s, i) => s.order = i);
            renderSkills();
            updatePreview();
        }

        function renderSkills() {
            const container = document.getElementById('skillsContainer');
            container.innerHTML = skills.map((skill, index) => `
                <div class="dynamic-item">
                    <div class="dynamic-item-header">
                        <strong>Skill Category ${index + 1}</strong>
                        <div>
                            <button class="order-btn" onclick="moveSkill(${skill.id}, 'up')" ${index === 0 ? 'disabled' : ''}>↑</button>
                            <button class="order-btn" onclick="moveSkill(${skill.id}, 'down')" ${index === skills.length - 1 ? 'disabled' : ''}>↓</button>
                            <button class="delete-btn" onclick="removeSkill(${skill.id})">Delete</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Category Name:</label>
                        <input type="text" value="${skill.category}" 
                            placeholder="e.g., CAD Modeling"
                            onchange="skills.find(s=>s.id===${skill.id}).category=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Skills (comma separated):</label>
                        <input type="text" value="${skill.items}" 
                            placeholder="e.g., SolidWorks, CATIA V5, AutoCAD"
                            onchange="skills.find(s=>s.id===${skill.id}).items=this.value; updatePreview()">
                    </div>
                </div>
            `).join('');
        }

        function addLanguage() {
            const id = Date.now();
            languages.push({ id, name: '', level: '', order: languages.length });
            renderLanguages();
        }

        function removeLanguage(id) {
            languages = languages.filter(l => l.id !== id);
            languages.forEach((l, idx) => l.order = idx);
            renderLanguages();
            updatePreview();
        }

        function moveLanguage(id, direction) {
            const idx = languages.findIndex(l => l.id === id);
            if (direction === 'up' && idx > 0) {
                [languages[idx], languages[idx - 1]] = [languages[idx - 1], languages[idx]];
            } else if (direction === 'down' && idx < languages.length - 1) {
                [languages[idx], languages[idx + 1]] = [languages[idx + 1], languages[idx]];
            }
            languages.forEach((l, i) => l.order = i);
            renderLanguages();
            updatePreview();
        }

        function renderLanguages() {
            const container = document.getElementById('languagesContainer');
            container.innerHTML = languages.map((lang, index) => `
                <div class="dynamic-item">
                    <div class="dynamic-item-header">
                        <strong>Language ${index + 1}</strong>
                        <div>
                            <button class="order-btn" onclick="moveLanguage(${lang.id}, 'up')" ${index === 0 ? 'disabled' : ''}>↑</button>
                            <button class="order-btn" onclick="moveLanguage(${lang.id}, 'down')" ${index === languages.length - 1 ? 'disabled' : ''}>↓</button>
                            <button class="delete-btn" onclick="removeLanguage(${lang.id})">Delete</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Language:</label>
                        <input type="text" value="${lang.name}" 
                            placeholder="e.g., English"
                            onchange="languages.find(l=>l.id===${lang.id}).name=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Level:</label>
                        <input type="text" value="${lang.level}" 
                            placeholder="e.g., Fluent"
                            onchange="languages.find(l=>l.id===${lang.id}).level=this.value; updatePreview()">
                    </div>
                </div>
            `).join('');
        }

        function addExperience() {
            const id = Date.now();
            experiences.push({ id, company: '', location: '', position: '', startDate: '', endDate: '', description: '', order: experiences.length });
            renderExperiences();
        }

        function removeExperience(id) {
            experiences = experiences.filter(e => e.id !== id);
            experiences.forEach((e, idx) => e.order = idx);
            renderExperiences();
            updatePreview();
        }

        function moveExperience(id, direction) {
            const idx = experiences.findIndex(e => e.id === id);
            if (direction === 'up' && idx > 0) {
                [experiences[idx], experiences[idx - 1]] = [experiences[idx - 1], experiences[idx]];
            } else if (direction === 'down' && idx < experiences.length - 1) {
                [experiences[idx], experiences[idx + 1]] = [experiences[idx + 1], experiences[idx]];
            }
            experiences.forEach((e, i) => e.order = i);
            renderExperiences();
            updatePreview();
        }

        function renderExperiences() {
            const container = document.getElementById('experienceContainer');
            container.innerHTML = experiences.map((exp, index) => `
                <div class="dynamic-item">
                    <div class="dynamic-item-header">
                        <strong>Experience ${index + 1}</strong>
                        <div>
                            <button class="order-btn" onclick="moveExperience(${exp.id}, 'up')" ${index === 0 ? 'disabled' : ''}>↑</button>
                            <button class="order-btn" onclick="moveExperience(${exp.id}, 'down')" ${index === experiences.length - 1 ? 'disabled' : ''}>↓</button>
                            <button class="delete-btn" onclick="removeExperience(${exp.id})">Delete</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Company/Organization:</label>
                        <input type="text" value="${exp.company}" 
                            placeholder="e.g., LUT Steel Structure Laboratory"
                            onchange="experiences.find(e=>e.id===${exp.id}).company=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Location (Country Code):</label>
                        <input type="text" value="${exp.location}" 
                            placeholder="e.g., FI"
                            onchange="experiences.find(e=>e.id===${exp.id}).location=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Position:</label>
                        <input type="text" value="${exp.position}" 
                            placeholder="e.g., Production Sr. Executive"
                            onchange="experiences.find(e=>e.id===${exp.id}).position=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Start Date:</label>
                        <input type="text" value="${exp.startDate}" 
                            placeholder="e.g., Jun. 2019"
                            onchange="experiences.find(e=>e.id===${exp.id}).startDate=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>End Date:</label>
                        <input type="text" value="${exp.endDate}" 
                            placeholder="e.g., Oct. 2023 or Present"
                            onchange="experiences.find(e=>e.id===${exp.id}).endDate=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Description (one bullet point per line):</label>
                        <textarea value="${exp.description}" 
                            placeholder="• First achievement&#10;• Second achievement&#10;• Third achievement"
                            onchange="experiences.find(e=>e.id===${exp.id}).description=this.value; updatePreview()">${exp.description}</textarea>
                    </div>
                </div>
            `).join('');
        }

        function addEducation() {
            const id = Date.now();
            education.push({ id, school: '', degree: '', location: '', startDate: '', endDate: '', order: education.length });
            renderEducation();
        }

        function removeEducation(id) {
            education = education.filter(e => e.id !== id);
            education.forEach((e, idx) => e.order = idx);
            renderEducation();
            updatePreview();
        }

        function moveEducation(id, direction) {
            const idx = education.findIndex(e => e.id === id);
            if (direction === 'up' && idx > 0) {
                [education[idx], education[idx - 1]] = [education[idx - 1], education[idx]];
            } else if (direction === 'down' && idx < education.length - 1) {
                [education[idx], education[idx + 1]] = [education[idx + 1], education[idx]];
            }
            education.forEach((e, i) => e.order = i);
            renderEducation();
            updatePreview();
        }

        function renderEducation() {
            const container = document.getElementById('educationContainer');
            container.innerHTML = education.map((edu, index) => `
                <div class="dynamic-item">
                    <div class="dynamic-item-header">
                        <strong>Education ${index + 1}</strong>
                        <div>
                            <button class="order-btn" onclick="moveEducation(${edu.id}, 'up')" ${index === 0 ? 'disabled' : ''}>↑</button>
                            <button class="order-btn" onclick="moveEducation(${edu.id}, 'down')" ${index === education.length - 1 ? 'disabled' : ''}>↓</button>
                            <button class="delete-btn" onclick="removeEducation(${edu.id})">Delete</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>School/University:</label>
                        <input type="text" value="${edu.school}" 
                            placeholder="e.g., LUT University"
                            onchange="education.find(e=>e.id===${edu.id}).school=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Degree:</label>
                        <input type="text" value="${edu.degree}" 
                            placeholder="e.g., M.Sc. (Tech) in Mechanical Engineering"
                            onchange="education.find(e=>e.id===${edu.id}).degree=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Location:</label>
                        <input type="text" value="${edu.location}" 
                            placeholder="e.g., Finland"
                            onchange="education.find(e=>e.id===${edu.id}).location=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Start Date:</label>
                        <input type="text" value="${edu.startDate}" 
                            placeholder="e.g., Sep. 2023"
                            onchange="education.find(e=>e.id===${edu.id}).startDate=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>End Date:</label>
                        <input type="text" value="${edu.endDate}" 
                            placeholder="e.g., Jun. 2025"
                            onchange="education.find(e=>e.id===${edu.id}).endDate=this.value; updatePreview()">
                    </div>
                </div>
            `).join('');
        }

        function addCustomSection() {
            const id = Date.now();
            const sectionKey = `custom_${id}`;
            const column = 'right'; // default to right column
            
            customSections.push({ id, title: '', content: '', column: column, order: customSections.length });
            
            // Add to section order
            sectionOrder[column].push(sectionKey);

            renderCustomSections();
        }
        function moveCustomSection(id, direction) {
            const idx = customSections.findIndex(s => s.id === id);
            if (direction === 'up' && idx > 0) {
                [customSections[idx], customSections[idx - 1]] = [customSections[idx - 1], customSections[idx]];
            } else if (direction === 'down' && idx < customSections.length - 1) {
                [customSections[idx], customSections[idx + 1]] = [customSections[idx + 1], customSections[idx]];
            }
            customSections.forEach((s, i) => s.order = i);
            renderCustomSections();
            updatePreview();
        }

        function removeCustomSection(id) {
            const sectionKey = `custom_${id}`;
            
            // Remove from order arrays
            sectionOrder.left = sectionOrder.left.filter(s => s !== sectionKey);
            sectionOrder.right = sectionOrder.right.filter(s => s !== sectionKey);
            
            customSections = customSections.filter(s => s.id !== id);
            customSections.forEach((s, idx) => s.order = idx);
            renderCustomSections();
            updatePreview();
        }

        function changeSectionPlacement(section, selectId) {
            const newColumn = document.getElementById(selectId).value;

            // Remove from both arrays
            sectionOrder.left = sectionOrder.left.filter(s => s !== section);
            sectionOrder.right = sectionOrder.right.filter(s => s !== section);
            
            // Add to new column at the end
            sectionOrder[newColumn].push(section);

            updatePreview();
        }

        function renderCustomSections() {
            const container = document.getElementById('customSectionsContainer');
            container.innerHTML = customSections.map((section, index) => `
                <div class="dynamic-item">
                    <div class="dynamic-item-header">
                        <strong>Custom Section ${index + 1}</strong>
                        <div>
                            <button class="order-btn" onclick="moveCustomSection(${section.id}, 'up')" ${index === 0 ? 'disabled' : ''}>↑</button>
                            <button class="order-btn" onclick="moveCustomSection(${section.id}, 'down')" ${index === customSections.length - 1 ? 'disabled' : ''}>↓</button>
                            <button class="delete-btn" onclick="removeCustomSection(${section.id})">Delete</button>
                        </div>
                    </div>

                    <div class="placement-control">
                        <label>Show in:</label>
                        <select id="customPlacement${section.id}" onchange="
                            customSections.find(s => s.id === ${section.id}).column = this.value;
                            changeSectionPlacement('custom_${section.id}', this.id);
                        ">
                            <option value="left" ${section.column === 'left' ? 'selected' : ''}>Left Column</option>
                            <option value="right" ${section.column === 'right' ? 'selected' : ''}>Right Column</option>
                        </select>
                        <button class="order-btn" onclick="moveSectionOrder('custom_${section.id}', customSections.find(s => s.id === ${section.id}).column, 'up')">↑</button>
                        <button class="order-btn" onclick="moveSectionOrder('custom_${section.id}', customSections.find(s => s.id === ${section.id}).column, 'down')">↓</button>
                    </div>

                    <div class="form-group">
                        <label>Section Title:</label>
                        <input type="text" value="${section.title}" 
                            placeholder="e.g., Certifications, Awards, Projects"
                            onchange="customSections.find(s => s.id === ${section.id}).title = this.value; updatePreview()">
                    </div>

                    <div class="form-group">
                        <label>Content (one item per line):</label>
                        <textarea placeholder="• Item 1&#10;• Item 2&#10;• Item 3"
                            onchange="customSections.find(s => s.id === ${section.id}).content = this.value; updatePreview()">${section.content}</textarea>
                    </div>
                </div>
            `).join('');
        }
       
        function addReference() {
            const id = Date.now();
            references.push({ id, name: '', title: '', phone: '', email: '', order: references.length });
            renderReferences();
        }

        function removeReference(id) {
            references = references.filter(r => r.id !== id);
            references.forEach((r, idx) => r.order = idx);
            renderReferences();
            updatePreview();
        }

        function moveReference(id, direction) {
            const idx = references.findIndex(r => r.id === id);
            if (direction === 'up' && idx > 0) {
                [references[idx], references[idx - 1]] = [references[idx - 1], references[idx]];
            } else if (direction === 'down' && idx < references.length - 1) {
                [references[idx], references[idx + 1]] = [references[idx + 1], references[idx]];
            }
            references.forEach((r, i) => r.order = i);
            renderReferences();
            updatePreview();
        }

        function renderReferences() {
            const container = document.getElementById('referencesContainer');
            container.innerHTML = references.map((ref, index) => `
                <div class="dynamic-item">
                    <div class="dynamic-item-header">
                        <strong>Reference ${index + 1}</strong>
                        <div>
                            <button class="order-btn" onclick="moveReference(${ref.id}, 'up')" ${index === 0 ? 'disabled' : ''}>↑</button>
                            <button class="order-btn" onclick="moveReference(${ref.id}, 'down')" ${index === references.length - 1 ? 'disabled' : ''}>↓</button>
                            <button class="delete-btn" onclick="removeReference(${ref.id})">Delete</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" value="${ref.name}" 
                            placeholder="e.g., Dr. John Smith"
                            onchange="references.find(r=>r.id===${ref.id}).name=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Title/Position:</label>
                        <input type="text" value="${ref.title}" 
                            placeholder="e.g., Professor, Department of Engineering"
                            onchange="references.find(r=>r.id===${ref.id}).title=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Phone:</label>
                        <input type="tel" value="${ref.phone}" 
                            placeholder="+358 123456789"
                            onchange="references.find(r=>r.id===${ref.id}).phone=this.value; updatePreview()">
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" value="${ref.email}" 
                            placeholder="email@example.com"
                            onchange="references.find(r=>r.id===${ref.id}).email=this.value; updatePreview()">
                    </div>
                </div>
            `).join('');
        }

        function loadProfilePic() {
            const file = document.getElementById('profilePic').files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePicData = e.target.result;
                    updatePreview();
                };
                reader.readAsDataURL(file);
            }
        }

        function updatePreview() {
            const themeColor = document.getElementById('themeColor').value;
            const gradientColor = document.getElementById('gradientColor').value;
            const useGradient = document.getElementById('useGradient').checked;
            const fontFamily = document.getElementById('fontFamily').value;
            const fontSize = document.getElementById('fontSize').value;
            const bulletStyle = document.getElementById('bulletStyle').value;

            document.documentElement.style.setProperty('--theme-color', themeColor);
            document.documentElement.style.setProperty('--font-family', fontFamily);
            document.documentElement.style.setProperty('--font-size', fontSize + 'px');

            const leftCol = document.getElementById('leftColumn');
            if (useGradient) {
                leftCol.style.background = `linear-gradient(135deg, ${themeColor}, ${gradientColor})`;
            } else {
                leftCol.style.background = themeColor;
            }

            // Personal Info
            document.getElementById('previewFirstName').textContent = document.getElementById('firstName').value;
            document.getElementById('previewLastName').textContent = document.getElementById('lastName').value;
            document.getElementById('previewJobTitle').textContent = document.getElementById('jobTitle').value;

            // Profile Picture
            const picDiv = document.getElementById('previewProfilePic');
            if (profilePicData) {
                picDiv.innerHTML = `<img src="${profilePicData}" alt="Profile">`;
            } else {
                picDiv.innerHTML = '👤';
            }

            // Get placements
            const placements = {
                contact: document.getElementById('contactPlacement').value,
                summary: document.getElementById('summaryPlacement').value,
                skills: document.getElementById('skillsPlacement').value,
                languages: document.getElementById('languagesPlacement').value,
                experience: document.getElementById('experiencePlacement').value,
                education: document.getElementById('educationPlacement').value,
                references: document.getElementById('referencesPlacement').value
            };

            // Build section contents
            const sections = {
                contact: { html: generateContactHTML(), placement: placements.contact },
                skills: { html: generateSkillsHTML(bulletStyle), placement: placements.skills },
                languages: { html: generateLanguagesHTML(bulletStyle), placement: placements.languages },
                references: { html: generateReferencesHTML(), placement: placements.references },
                summary: { html: generateSummaryHTML(), placement: placements.summary },
                experience: { html: generateExperienceHTML(bulletStyle), placement: placements.experience },
                education: { html: generateEducationHTML(), placement: placements.education }
            };

            // Add custom sections
            customSections.forEach((section) => {
                sections[`custom_${section.id}`] = { 
                    html: generateCustomSectionHTML(section, bulletStyle), 
                    placement: section.column 
                };
            });

            /// Distribute sections to columns IN ORDER
            let leftContent = '';
            let rightContent = '';

            // Process left column in order
            sectionOrder.left.forEach(key => {
                if (sections[key] && sections[key].placement === 'left') {
                    leftContent += sections[key].html;
                }
            });

            // Process right column in order
            sectionOrder.right.forEach(key => {
                if (sections[key] && sections[key].placement === 'right') {
                    rightContent += sections[key].html;
                }
            });

            document.getElementById('leftColumnContent').innerHTML = leftContent;
            document.getElementById('rightColumnContent').innerHTML = rightContent;
        }

        function generateContactHTML() {
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const linkedin = document.getElementById('linkedin').value;
            const location = document.getElementById('location').value;
                        
            if (!phone && !email && !linkedin && !location) return '';
            
            return `
                <div class="section-title">CONTACT</div>
                <div>
                    ${phone ? `<div class="contact-item"><i class="fa fa-phone"></i> ${phone}</div>` : ''}
                    ${email ? `<div class="contact-item"><i class="fa fa-envelope"></i> <a href="mailto:${email}">${email}</a></div>` : ''}
                    ${linkedin ? `<div class="contact-item"><i class="fa fa-link"></i> <a href="${linkedin}" target="_blank">${linkedin}LinkedIn</a></div>` : ''}
                    ${location ? `<div class="contact-item"><i class="fa fa-map-marker"></i> ${location}</div>` : ''}
                </div>
`;
        }

        function generateSkillsHTML(bullet) {
            if (skills.length === 0) return '';

            const content = skills.map(skill => 
                skill.category || skill.items ? `
                    <div class="skill-item">
                        ${skill.category ? `<strong>${skill.category}</strong>` : ''}
                        ${skill.items ? `<div>${skill.items}</div>` : ''}
                    </div>
                ` : ''
            ).join('');

            return content ? `<div class="section-title">SKILLS</div><div>${content}</div>` : '';
        }

        function generateLanguagesHTML(bullet) {
            if (languages.length === 0) return '';
            
            const content = languages.map(lang => 
                lang.name ? `<div>${lang.name}${lang.level ? ` - ${lang.level}` : ''}</div>` : ''
            ).join('');

            return content ? `<div class="section-title">LANGUAGE</div><div>${content}</div>` : '';
        }

        function generateReferencesHTML() {
            if (references.length === 0) return '';
            
            const content = references.map(ref => {
                if (!ref.name) return '';
                return `
                    <div class="reference-item">
                        <strong>${ref.name}</strong>
                        ${ref.title ? `<div>${ref.title}</div>` : ''}
                        ${ref.phone ? `<div> <i class="fa fa-phone"></i> ${ref.phone}</div>` : ''}
                        ${ref.email ? `<div> <i class="fa fa-envelope"></i>  ${ref.email}</div>` : ''}
                    </div>
                `;
            }).join('');

            return content ? `<div class="section-title">REFERENCES</div><div>${content}</div>` : '';
        }

        function generateSummaryHTML() {
            const summary = document.getElementById('summary').value;
            if (!summary) return '';
            
            return `<div class="section-title">ABOUT ME</div><div style="margin-bottom: 20px;">${summary}</div>`;
        }

        function generateExperienceHTML(bullet) {
            if (experiences.length === 0) return '';

            const content = experiences.map(exp => {
                if (!exp.company && !exp.position) return '';
                const bullets = exp.description.split('\n').filter(b => b.trim()).map(b => {
                    const text = b.trim().replace(/^[•▪►✓→\-]\s*/, '');
                    return `${bullet} ${text}`;
                });
                return `
                    <div class="experience-item">
                        <div class="item-header">
                            <span>${exp.position ? `${exp.position}` : ''}</span>
                            <span>${exp.startDate}${exp.endDate ? ' - ' + exp.endDate : ''}</span>
                        </div>
                        <div style="margin-bottom: 5px;">${exp.company}${exp.location ? ', ' + exp.location : ''}</div>
                        ${bullets.length > 0 ? `<div class="item-description">${bullets.map(b => `<div>${b}</div>`).join('')}</div>` : ''}
                    </div>
                `;
            }).join('');

            return content ? `<div class="section-title">EXPERIENCE</div><div>${content}</div>` : '';
        }

        function generateEducationHTML() {
            if (education.length === 0) return '';

            const content = education.map(edu => {
                if (!edu.school && !edu.degree) return '';
                return `
                    <div class="education-item">
                        <div class="item-header">
                            <span>${edu.degree ? `${edu.degree}` : ''}</span>
                            <span>${edu.startDate}${edu.endDate ? ' - ' + edu.endDate : ''}</span>
                        </div>
                        <div>${edu.school}${edu.location ? ', ' + edu.location : ''}</div>
                    </div>
                `;
            }).join('');

            return content ? `<div class="section-title">EDUCATION</div><div>${content}</div>` : '';
        }

        function generateCustomSectionHTML(section, bullet) {
            if (!section.title) return '';
            
            const items = section.content.split('\n').filter(i => i.trim()).map(i => {
                const text = i.trim().replace(/^[•▪►✓→\-]\s*/, '');
                return `${bullet} ${text}`;
            });

            return `
                <div class="custom-section">
                    <div class="section-title">${section.title.toUpperCase()}</div>
                    ${items.length > 0 ? `<div class="custom-section-item">${items.map(i => `<div style="padding-left: 15px; text-indent: -15px; margin: 3px 0;">${i}</div>`).join('')}</div>` : ''}
                </div>
            `;
        }

        function printResume() {
            window.print();
        }

        function downloadPDF() {
            const originalTitle = document.title;
            const name = document.getElementById('firstName').value || 'Resume';
            document.title = `${name}_Resume`;
            
            window.print();
            
            setTimeout(() => {
                document.title = originalTitle;
            }, 100);
        }

        function saveData() {
            const data = {
                sectionOrder: sectionOrder,
                themeColor: document.getElementById('themeColor').value,
                gradientColor: document.getElementById('gradientColor').value,
                useGradient: document.getElementById('useGradient').checked,
                fontFamily: document.getElementById('fontFamily').value,
                fontSize: document.getElementById('fontSize').value,
                bulletStyle: document.getElementById('bulletStyle').value,
                contactPlacement: document.getElementById('contactPlacement').value,
                linkedin: document.getElementById('linkedin').value,
                summaryPlacement: document.getElementById('summaryPlacement').value,
                skillsPlacement: document.getElementById('skillsPlacement').value,
                languagesPlacement: document.getElementById('languagesPlacement').value,
                experiencePlacement: document.getElementById('experiencePlacement').value,
                educationPlacement: document.getElementById('educationPlacement').value,
                referencesPlacement: document.getElementById('referencesPlacement').value,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                jobTitle: document.getElementById('jobTitle').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                location: document.getElementById('location').value,
                summary: document.getElementById('summary').value,
                profilePic: profilePicData,
                skills,
                languages,
                experiences,
                education,
                customSections,
                references
            };
            const json = JSON.stringify(data);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume_data.json';
            a.click();
            URL.revokeObjectURL(url);
            alert('Resume data saved!');
        }

        function loadData() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = function(event) {
                    try {
                        const data = JSON.parse(event.target.result);
                        
                        document.getElementById('themeColor').value = data.themeColor || '#008c8c';
                        document.getElementById('gradientColor').value = data.gradientColor || '#005555';
                        document.getElementById('useGradient').checked = data.useGradient || false;
                        document.getElementById('fontFamily').value = data.fontFamily || "'Segoe UI', sans-serif";
                        document.getElementById('fontSize').value = data.fontSize || 11;
                        document.getElementById('bulletStyle').value = data.bulletStyle || 'â€¢';
                        document.getElementById('contactPlacement').value = data.contactPlacement || 'left';
                        document.getElementById('linkedin').value = data.linkedin || '';
                        document.getElementById('summaryPlacement').value = data.summaryPlacement || 'right';
                        document.getElementById('skillsPlacement').value = data.skillsPlacement || 'left';
                        document.getElementById('languagesPlacement').value = data.languagesPlacement || 'left';
                        document.getElementById('experiencePlacement').value = data.experiencePlacement || 'right';
                        document.getElementById('educationPlacement').value = data.educationPlacement || 'right';
                        document.getElementById('referencesPlacement').value = data.referencesPlacement || 'left';
                        document.getElementById('firstName').value = data.firstName || '';
                        document.getElementById('lastName').value = data.lastName || '';
                        document.getElementById('jobTitle').value = data.jobTitle || '';
                        document.getElementById('phone').value = data.phone || '';
                        document.getElementById('email').value = data.email || '';
                        document.getElementById('location').value = data.location || '';
                        document.getElementById('summary').value = data.summary || '';
                        
                        profilePicData = data.profilePic || null;
                        
                        skills = data.skills || [];
                        languages = data.languages || [];
                        experiences = data.experiences || [];
                        education = data.education || [];
                        customSections = data.customSections || [];
                        references = data.references || [];
                        
                        // Load section order and add any custom sections that were saved
                        sectionOrder = data.sectionOrder || {
                            left: ['contact', 'skills', 'languages', 'references'],
                            right: ['summary', 'experience', 'education']
                        };

                        // Add custom section keys to sectionOrder if they're not already there
                        customSections.forEach(section => {
                            const key = `custom_${section.id}`;
                            const column = section.column || 'right';
                            
                            if (!sectionOrder.left.includes(key) && !sectionOrder.right.includes(key)) {
                                sectionOrder[column].push(key);
                            }
                        });
                        
                        renderSkills();
                        renderLanguages();
                        renderExperiences();
                        renderEducation();
                        renderCustomSections();
                        renderReferences();
                        updatePreview();
                        
                        alert('Resume data loaded successfully!');
                    } catch (error) {
                        alert('Error loading file: ' + error.message);
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }
        
        function downloadLatex() {
            alert('LaTeX export feature coming soon! For now, please use Print/PDF option.');
        }

        function clearAll() {
            if (!confirm('Are you sure you want to clear all data? This cannot be undone.')) {
                return;
            }
            
            document.getElementById('themeColor').value = '#008c8c';
            document.getElementById('gradientColor').value = '#005555';
            document.getElementById('useGradient').checked = false;
            document.getElementById('fontFamily').value = "'Segoe UI', sans-serif";
            document.getElementById('fontSize').value = 11;
            document.getElementById('bulletStyle').value = '•';
            document.getElementById('contactPlacement').value = 'left';
            document.getElementById('summaryPlacement').value = 'right';
            document.getElementById('skillsPlacement').value = 'left';
            document.getElementById('languagesPlacement').value = 'left';
            document.getElementById('experiencePlacement').value = 'right';
            document.getElementById('educationPlacement').value = 'right';
            document.getElementById('referencesPlacement').value = 'left';
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('jobTitle').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('location').value = '';
            document.getElementById('summary').value = '';
            document.getElementById('profilePic').value = '';
            
            profilePicData = null;
            skills = [];
            languages = [];
            experiences = [];
            education = [];
            customSections = [];
            references = [];
            
            renderSkills();
            renderLanguages();
            renderExperiences();
            renderEducation();
            renderCustomSections();
            renderReferences();
            updatePreview();
            
            alert('All data cleared!');
        }

        window.onload = function() {
            updatePreview();
        };