package br.com.cloud.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.cloud.domain.Message;


/**
 * Interface  MessageRepository enable cross-origin-request
 * To allow requests from different domain, all you to do is add the @CrossOrigin 
 * annotation to the repository
 *  
 * @author fabianosf
 *
 */

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "messages", path = "messages")
public interface MessageRepository extends CrudRepository<Message, Long>{

}
