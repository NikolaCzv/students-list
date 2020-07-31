import React, { useEffect, useState } from "react";
import { Loader } from '../../common';
import { Student } from "./components/Student";
import { publicAPI } from "../../utils";
import { Container, InputFilter, Content } from "./style";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expand, setExpand] = useState({});
    const [tags, setTags] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const { data } = await publicAPI.get('/assessment/students');
                setStudents(data.students);
                setFilteredStudents(data.students);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        })()
    }, []);

    const handleChangeSearch = e => {
        const name = e.target.value;
        const filtered = students.filter(s => s.firstName.toLowerCase().indexOf(name) > -1 ||  s.lastName.toLowerCase().indexOf(name) > -1);
        setFilteredStudents([...filtered]);
    }

    const handleChangeTag = (e, id) => {
        if (e.key === 'Enter') {
            const value = e.target.value;
            const currentTags = tags[id];

            if (currentTags) {
                const newTags = {
                    ...tags,
                    [id]: [...currentTags, value]
                }
                return setTags(newTags);
            }

            return setTags({
                ...tags,
                [id]: [value]
            });
        }
    }

    if (loading) return <Loader />;
    console.log(tags)

    return (
        <Container>
            <Content>
            <InputFilter placeholder="Search by name..." onChange={handleChangeSearch} />
            {filteredStudents.map(student =>
                <Student
                    key={student.id}
                    expand={expand}
                    setExpand={setExpand}
                    onChangeTag={handleChangeTag}
                    tags={tags}
                    student={student}
                />
            )}
            </Content>
        </Container>
    )
}

export default Students;