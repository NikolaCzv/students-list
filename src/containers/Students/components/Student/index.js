import React from "react";
import { getAverageGrade } from "../../../../utils";
import {
    Container,
    Content,
    ExpendIcon,
    AvatarWrapper,
    Avatar,
    DetailsWrapper,
    DetailsTitle,
    DetailsLabel,
    HiddenContent,
    Grade,
    TagsWrapper,
    Tag,
    TagInput
} from "./style";

export const Student = ({ expand, setExpand, onChangeTag, tags, student: { id, firstName, lastName, pic, email, company, skill, grades } }) => (
    <Container>
        <Content>
            {expand[id] ?
            <ExpendIcon onClick={() => setExpand({ ...expand, [id]: !expand[id] })}>-</ExpendIcon>
            :
            <ExpendIcon onClick={() => setExpand({ ...expand, [id]: !expand[id] })}>+</ExpendIcon>
            }
            <AvatarWrapper>
                <Avatar src={pic} alt="avatar" />
            </AvatarWrapper>
            <DetailsWrapper>
                <DetailsTitle>{firstName} {lastName}</DetailsTitle>
                <DetailsLabel>Email: {email}</DetailsLabel>
                <DetailsLabel>Company: {company}</DetailsLabel>
                <DetailsLabel>Skill: {skill}</DetailsLabel>
                <DetailsLabel>Average: {`${getAverageGrade(grades)}%`}</DetailsLabel>
            </DetailsWrapper>
        </Content>
        {expand[id] && (
            <HiddenContent>
                {grades.map((grade, index) => (
                    <Grade key={`${grade}${index}`}>{`Test${index + 1}: ${grade}%`}</Grade>
                ))}
                <TagsWrapper>
                    {tags[id] && tags[id].map((tag, index) => (
                        <Tag key={`${tag}${index}`}>{tag}</Tag>
                    ))}
                </TagsWrapper>
                <TagInput placeholder="Search by tags..." onKeyDown={e => onChangeTag(e, id)} />
            </HiddenContent>
        )}
    </Container>
)