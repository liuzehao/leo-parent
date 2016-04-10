package com.genghis.leo.relation;
import com.genghis.leo.relation.Model.RelationFile;
import com.genghis.leo.relation.service.Relationlm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by hao pc on 2016/4/3.
 */
@Controller
public class Relation {
    @Autowired
   private  Relationlm k;
    @RequestMapping(value="/relation")
    public String relation()
    {
       System.out.println("来了");
        return "relation";
    }
    @RequestMapping(value="/addrelation")
            public void addrelation(@RequestParam(value = "number1", required = true)String number1,@RequestParam(value = "number2", required = true)String number2)
    {
          RelationFile ren=new RelationFile(number1,number2,"2016-4-3");
        k.addrelation(ren);
    }
}
